import TextField from '../../ui/TextField';
import Loading from '../../ui/Loading';

function SendOPTFrom({ register, onSubmit, isPending, errors }) {
  
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <TextField label="Phone number" name="phonenumber" register={register} required validationSchema={{ required: "Phone number is required", 
        minLength : { value : 10, message : "Phone number must be at least 10 characters",
        maxLength : { value : 100, message : "Phone number must be at most 100 characters"}
        }}} errors={errors}/>
        <div>
          {isPending ? (
            <Loading/>
          ) : (
            <button type="submit" className="btn btn--primary w-full">Send verification code</button>
          )}
        </div>
      </form>
    </div>
  )
}

export default SendOPTFrom

