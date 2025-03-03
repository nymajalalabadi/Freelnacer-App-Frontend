import { useForm } from 'react-hook-form'
import TextField from '../../ui/TextField';
import Loading from '../../ui/Loading';
import useCreateProposal from './useCreateProposal';

function CreateProposal({ onClose, projectId }) {
  const { handleSubmit, register, formState: { errors, isSubmitting }} = useForm({
    defaultValues: {
      description: '',
      price: '',
      duration: ''
    }
  });

  const { createProposal, isCreating } = useCreateProposal()

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      projectId,
      price: Number(data.price),
      duration: Number(data.duration)
    };

    createProposal(formattedData, { 
      onSuccess: () => onClose(),
    });
  }

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} >
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
        />

        <TextField 
          label="Price" 
          name="price" 
          type="number" 
          register={register} 
          required 
          validationSchema={{ 
            required: "Please enter price",
            min: {
              value: 1,
              message: "Price must be greater than zero"
            }
          }} 
          errors={errors}
        />

        <TextField 
          label="Duration (days)" 
          name="duration" 
          type="number" 
          register={register} 
          required 
          validationSchema={{ 
            required: "Please enter duration",
            min: {
              value: 1,
              message: "Duration must be at least 1 day"
            }
          }} 
          errors={errors}
        />

        <div className="!mt-8">
          {isCreating || isSubmitting ? (
            <Loading />
          ) : (
            <button 
              type="submit" 
              className="btn btn--primary w-full"
              disabled={isSubmitting}
            >
              Submit Proposal
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default CreateProposal 