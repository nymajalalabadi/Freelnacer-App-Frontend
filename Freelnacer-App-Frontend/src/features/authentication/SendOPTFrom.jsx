import { useState } from 'react'
import TextField from '../../ui/TextField';
import { useMutation } from '@tanstack/react-query';
import { getOPT } from '../../services/authService';
import toast from 'react-hot-toast';

function SendOPTFrom() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOPT,
  })

  const sendOptsHandler = async (e) => {
    e.preventDefault();
    try{
    const data =  await mutateAsync({phoneNumber});
    toast.success(data.message)
    } catch(error){
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <div>
      <form className="space-y-10" onSubmit={sendOptsHandler}>
        <TextField label="Phone number" name="phonenumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
        <button type="submit" className="btn btn--primary w-full">
            Send verification code
        </button>
      </form>
    </div>
  )
}

export default SendOPTFrom

