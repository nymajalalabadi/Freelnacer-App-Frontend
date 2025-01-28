import { useState } from "react"
import TextField from "../../ui/TextField"
import RadioInput from "../../ui/RadioInput";

function CompleteProfileFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");


  return (
    <div className="w-full sm:max-w-sm">
      <form className="space-8">
        <TextField label="FistName And LastName" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput label="Employer" id="OWNER" name="role" value="OWNER" onChange={e => setRole(e.target.value)} checked={role === "OWNER"}/>
            <RadioInput label="Freelnacer" id="FREELNACER" name="role" value="FREELNACER" onChange={e => setRole(e.target.value)} checked={role === "FREELNACER"}/>
          </div>
        <button className="btn btn--primary w-full">Complete</button>
      </form>
    </div>
  )
}

export default CompleteProfileFrom
