import { TagsInput } from "react-tag-input-component";
import RHFSelect from "../../ui/RHFSelectField";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from '../../ui/Loading';
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {

  //edit
  const {_id : editId } = projectToEdit;

  const isEditSession = Boolean(editId);

  const { title, description, budget, category, deadline, tags: prevTags } = projectToEdit;

  let editValues = {};

  if (isEditSession) 
  {
    editValues = { title, description, budget, category: category._id };
  }
  //


  const {register, formState:{ errors }, handleSubmit, reset} = useForm({ defaultValues : editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));

  const { categories } = useCategories();

  const { isCreating, createProject } = useCreateProject();
  const { editProject, isEditing } = useEditProject();


  const onSubmit = (data) => {
    const newProject = {...data, tags, deadline: new Date(date).toISOString()};

    if (isEditSession)
    {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );

    }
    else{
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Project Title" name="title" register={register} required validationSchema={{ required: "title is required", 
        minLength : { value : 10, message : "title must be at least 10 characters"},
        maxLength : { value : 100, message : "title must be at most 100 characters"}
        }} errors={errors}/>

      <TextField label="Project Description" name="Description" register={register} required validationSchema={{ required: "Description is required", 
        minLength : { value : 15, message : "Description must be at least 15 characters"},
        maxLength : { value : 500, message : "Description must be at most 500 characters"}
        }} errors={errors}/>

      <TextField label="Price" name="budget" type="number" register={register} required validationSchema={{ required: "Price is required"}} errors={errors}/>

      <RHFSelect label="Category" name="category" register={register} options={categories} required/>

      <div>
        <label className="mb-2 block text-secondary-700">Tags</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField label="Deadline" date={date} setDate={setDate}/>
      <div className="!mt-8">
        {
          isCreating ? (
            <Loading/>
          ) : (
            <button type="submit" className="btn btn--primary w-full">Create</button>
          )
        }
      </div>
    </form>
  )
}

export default CreateProjectForm


