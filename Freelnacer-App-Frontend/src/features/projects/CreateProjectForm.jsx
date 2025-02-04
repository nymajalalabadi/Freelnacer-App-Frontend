
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";

function CreateProjectForm() {

    const {register, formState:{ errors }, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Project Title" name="title" register={register} required validationSchema={{ required: "title is required", 
        minLength : { value : 10, message : "title must be at least 10 characters",
        maxLength : { value : 100, message : "title must be at most 100 characters"}
        }}} errors={errors}/>
      
      <button type="submit" className="btn btn--primary w-full">Create</button>
    </form>
  )
}

export default CreateProjectForm


