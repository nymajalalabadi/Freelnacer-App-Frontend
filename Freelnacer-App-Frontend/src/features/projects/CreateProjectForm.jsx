import { TagsInput } from "react-tag-input-component";
import RHFSelect from "../../ui/RHFSelectField";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";

function CreateProjectForm() {

    const {register, formState:{ errors }, handleSubmit} = useForm();

    const [tags, setTags] = useState([]);
    const [date, setDate] = useState(new Date());

    const { categories } = useCategories();


    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Project Title" name="title" register={register} required validationSchema={{ required: "title is required", 
        minLength : { value : 10, message : "title must be at least 10 characters",
        maxLength : { value : 100, message : "title must be at most 100 characters"}
        }}} errors={errors}/>

      <TextField label="Project Description" name="Description" register={register} required validationSchema={{ required: "Description is required", 
        minLength : { value : 15, message : "title must be at least 15 characters",
        maxLength : { value : 500, message : "title must be at most 500 characters"}
        }}} errors={errors}/>

      <TextField label="Price" name="Price" type="number" register={register} required validationSchema={{ required: "Price is required"}} errors={errors}/>

      <RHFSelect label="Category" name="category" register={register} options={categories} required/>

      <div>
        <label className="mb-2 block text-secondary-700">Tags</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField label="Deadline" date={date} setDate={setDate}/>
      <button type="submit" className="btn btn--primary w-full">Create</button>
    </form>
  )
}

export default CreateProjectForm


