import { TagsInput } from "react-tag-input-component";
import RHFSelect from "../../ui/RHFSelectField";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from '../../ui/Loading';
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const { title, description, budget, category, deadline, tags: prevTags } = projectToEdit;

  const defaultValues = {
    title: title || '',
    description: description || '',
    budget: budget || '',
    category: category?._id || '',
  };

  const { register, formState: { errors, isSubmitting }, handleSubmit, reset } = useForm({ 
    defaultValues,
    mode: 'onChange'
  });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(deadline ? new Date(deadline) : new Date());
  const [isFormDirty, setIsFormDirty] = useState(false);

  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { editProject, isEditing } = useEditProject();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isFormDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isFormDirty]);

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
      budget: Number(data.budget)
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
            setIsFormDirty(false);
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
          setIsFormDirty(false);
        },
      });
    }
  };

  const handleClose = () => {
    if (isFormDirty) {
      if (window.confirm('Are you sure you want to close? Unsaved changes will be lost.')) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <TextField
        label="Project Title"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "Please enter project title",
          minLength: {
            value: 3,
            message: "Title must be at least 3 characters"
          }
        }}
        errors={errors}
        onChange={() => setIsFormDirty(true)}
      />

      <TextField
        label="Description"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "Please enter description",
          minLength: {
            value: 10,
            message: "Description must be at least 10 characters"
          }
        }}
        errors={errors}
        onChange={() => setIsFormDirty(true)}
      />

      <TextField
        label="Budget"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "Please enter budget",
          min: {
            value: 1,
            message: "Budget must be greater than zero"
          }
        }}
        errors={errors}
        onChange={() => setIsFormDirty(true)}
      />

      <RHFSelect
        label="Category"
        name="category"
        register={register}
        required
        validationSchema={{
          required: "Please select a category"
        }}
        errors={errors}
        options={categories}
        onChange={() => setIsFormDirty(true)}
      />

      <DatePickerField
        label="Deadline"
        value={date}
        onChange={(newDate) => {
          setDate(newDate);
          setIsFormDirty(true);
        }}
      />

      <div>
        <label className="block text-secondary-700 mb-2">Tags</label>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          placeHolder="Enter new tag"
          onChange={() => setIsFormDirty(true)}
        />
      </div>

      <div className="flex justify-end gap-x-4">
        <button
          type="button"
          onClick={handleClose}
          className="btn btn--secondary"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn--primary"
          disabled={isCreating || isEditing || isSubmitting}
        >
          {isCreating || isEditing ? <Loading /> : isEditSession ? "Edit Project" : "Create Project"}
        </button>
      </div>
    </form>
  );
}

export default CreateProjectForm; 