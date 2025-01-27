import TextField from '../../ui/TextField';
import { useMutation } from '@tanstack/react-query';
import { getOPT } from '../../services/authService';
import toast from 'react-hot-toast';
import Loading from '../../ui/Loading';

function SendOPTFrom({ setStep, phoneNumber, onChange }) {
  
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOPT,
  })

  const sendOptsHandler = async (e) => {
    e.preventDefault();
    try{
    const data =  await mutateAsync({phoneNumber});
    setStep(2);
    toast.success(data.message)
    } catch(error){
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <div>
      <form className="space-y-10" onSubmit={sendOptsHandler}>
        <TextField label="Phone number" name="phonenumber" value={phoneNumber} onChange={onChange}/>
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

