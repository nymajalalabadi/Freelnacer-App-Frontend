import { useState } from "react";
import SendOPTFrom from "./SendOPTFrom";
import CheckOPTFrom from "./CheckOPTFrom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOPT } from "../../services/authService";
import { useForm } from "react-hook-form";


function AuthContainer() {
  const {handleSubmit, register, formState:{ errors }, getValues } = useForm();

  const [step, setStep] = useState(1);

  const { isPending, mutateAsync, data : otpResponse } = useMutation({
    mutationFn: getOPT,
  })

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOPTFrom register={register} onSubmit={handleSubmit(sendOtpHandler)}  isPending={isPending} errors={errors}/>;
      case 2:
        return <CheckOPTFrom onBack={() => setStep((s) => s -1)} phoneNumber={getValues("phoneNumber")} onReSendOtp={sendOtpHandler} otpResponse={otpResponse}/>;
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
  
}

export default AuthContainer
