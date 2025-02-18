import { useForm } from 'react-hook-form'
import TextField from '../../ui/TextField';
import Loading from '../../ui/Loading';
import useCreateProposal from './useCreateProposal';

function CreateProposal({ onClose, projectId }) {

  const { handleSubmit, register, formState : { errors }} = useForm();

  const { createProposal, isCreating } = useCreateProposal()

  const onSubmit = (data) => {

    createProposal({ ...data, projectId }, { 
      onSuccess: () => onClose(),
    });

  }

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} >

        <TextField label="Description" name="Description" register={register} required validationSchema={{ 
        required: "Description is required", 
        minLength : { value : 10, message : "Description must be at least 10 characters"}
        }} errors={errors} />

        <TextField label="Price" name="Price" type="number" register={register} required validationSchema={{ required: "Price is required"}} errors={errors}/>

        <TextField label="Deadline" name="duration" type="number" register={register} required validationSchema={{ required: "Deadline is required"}} errors={errors}/>

        <div className="!mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              Submit
            </button>
          )}
        </div>

      </form>
    </div>
  )
}

export default CreateProposal
