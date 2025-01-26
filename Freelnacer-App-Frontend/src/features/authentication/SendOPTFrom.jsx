import { useState } from 'react'
import TextField from '../../ui/TextField';

function SendOPTFrom() {
    const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <form className="space-y-10">
        <TextField label="Phone number" name="phonenumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
        <button className="btn btn--primary w-full">
            Send verification code
        </button>
      </form>
    </div>
  )
}

export default SendOPTFrom

