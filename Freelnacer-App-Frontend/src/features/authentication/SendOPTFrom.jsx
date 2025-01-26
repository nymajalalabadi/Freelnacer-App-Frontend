import { useState } from 'react'
import TextField from '../../ui/TextField';

function SendOPTFrom() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOptsHandler = (e) => {
    e.preventDefault();
    console.log(phoneNumber);
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

