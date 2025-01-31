import { useState } from "react"
import TextField from "../../ui/TextField"
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

function CompleteProfileFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate()

  const { isPending, mutateAsync } = useMutation({
    mutationFn : completeProfile
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const {user, message} = await mutateAsync({name, email, role});
      toast.success(message);

      if(user.status !== 2) 
      {
          navigate("/");
          toast("please wait for admin approval", { icon: "���" });
          return;
      }

      if(user.role === "OWNER") return navigate("/owner");
      if(user.role === "FREELNACER") return navigate("/freelnacer");
    }catch(error){
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <div className="flex flex-col gap-y-6 items-center pt-10">
      <h1 className="font-bold text-3xl text-secondary-700">Complete your profile</h1>
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField label="Fistname And Lastname" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <div className="flex items-center justify-center gap-x-8">
              <RadioInput label="Employer" id="OWNER" name="role" value="OWNER" onChange={e => setRole(e.target.value)} checked={role === "OWNER"}/>
              <RadioInput label="Freelnacer" id="FREELNACER" name="role" value="FREELNACER" onChange={e => setRole(e.target.value)} checked={role === "FREELNACER"}/>
            </div>
              <div>
                {isPending ? (
                <Loading/>
                ) : (
                <button type="submit" className="btn btn--primary w-full">Submit</button>
                )}
              </div>
        </form>
    </div>
    </div>
  )
}

export default CompleteProfileFrom
