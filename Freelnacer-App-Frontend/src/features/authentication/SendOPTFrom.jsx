import { useState } from 'react'

function SendOPTFrom() {
    const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <form className="space-y-10">
        <div>
            <label htmlFor="phonenumber" className="mb-1">Phone Number</label>
            <input id="phonenumber" name="phonenumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text"  className="textField__input"/>
        </div>
        <button className="btn btn--primary w-full">
            Send verification code
        </button>
      </form>
    </div>
  )
}

export default SendOPTFrom

