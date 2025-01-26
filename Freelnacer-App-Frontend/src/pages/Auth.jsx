import CheckOPTFrom from "../features/authentication/CheckOPTFrom"
import SendOPTFrom from "../features/authentication/SendOPTFrom"

function Auth() {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <SendOPTFrom />
        <CheckOPTFrom />
      </div>
    </div>
  )
}

export default Auth

