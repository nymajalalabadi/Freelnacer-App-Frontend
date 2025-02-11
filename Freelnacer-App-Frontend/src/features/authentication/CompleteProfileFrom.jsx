import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

function CompleteProfileFrom() {
  const { handleSubmit, register, watch, formState: { errors } } = useForm();

  const navigate = useNavigate()

  const { isPending, mutateAsync } = useMutation({
    mutationFn : completeProfile
  });

  const onSubmit  = async(data) => {
    try{
      const {user, message} = await mutateAsync(data);
      toast.success(message);

      if(user.status !== 2) 
      {
          navigate("/");
          toast("please wait for admin approval", { icon: "���" });
          return;
      }

      if(user.role === "OWNER")
      {
        return navigate("/owner");
      }
      
      if(user.role === "FREELNACER")
      {
        return navigate("/freelnacer");
      }

    }catch(error){
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <div className="flex flex-col gap-y-6 items-center pt-10">
      <h1 className="font-bold text-3xl text-secondary-700">Complete your profile</h1>
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField label="First And Last name" name="name" required register={register} validationSchema={{
              required: "First and last name are required",
            }} errors={errors} />
          <TextField label="Email" name="email" required register={register}
            validationSchema={{ required: "Email is essential", pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email is invalid",
              },
            }} errors={errors} />
              <RadioInputGroup errors={errors} register={register} watch={watch}
              configs={{
              name: "role",
              validationSchema: { required: "The role is required" },
              options: [
                {
                  value: "OWNER", label: "Owner",
                },
                { value: "FREELANCER", label: "Freelancer" },
              ],
            }}
            />

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
