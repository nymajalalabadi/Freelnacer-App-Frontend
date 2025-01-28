import { useState } from "react"
import TextField from "../../ui/TextField"

function CompleteProfileFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full sm:max-w-sm">
      <form className="space-8">
        <TextField label="FistName And LastName" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <div className="flex items-center justify-center gap-x-8">
            <div className="flex items-center gap-x-8 text-secondary-600">
              <inpu className="cursor-pointer w-4 h-4 from-radio text-primary-900 focus:ring-primary-900" type="radio" name="role" id="OWNER" value="OWNER" />
              <label htmlFor="OWNER">Employer</label>
            </div>
            <div>
              <inpu className="cursor-pointer w-4 h-4 from-radio text-primary-900 focus:ring-primary-900" type="radio" name="role" id="FREELNACER" value="FREELNACER" />
              <label htmlFor="FREELNACER">Freelnacer</label>
            </div>
          </div>
        <button className="btn btn--primary w-full">Complete</button>
      </form>
    </div>
  )
}

export default CompleteProfileFrom
