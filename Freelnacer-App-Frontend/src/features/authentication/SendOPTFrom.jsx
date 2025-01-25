import { useState } from 'react'

function SendOPTFrom() {
    const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <form className="space-y-10">
        <div>
            <label htmlFor="phonenumber" className="mb-1">Phone Number</label>
            <input id="phonenumber" name="phonenumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text"  className="w-full py-3 px-4 rounded-xl text-secondary-900 border
             border-gray-300 hover:border-primary-500 focus:border-primary-500 focus:bg-white transition-all duration-300 ease-out focus:shadow-lg focus:shadow-primary-200"/>
        </div>
        <button className="px-4 py-2 font-bold bg-primary-900 text-white w-full rounded-2xl transition-all duration-300 hover:bg-primary-800 shadow-lg shadow-primary-300">Send verification code</button>
      </form>
    </div>
  )
}

export default SendOPTFrom
