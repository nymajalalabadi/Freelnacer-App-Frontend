import { useEffect, useState } from "react";
import SendOPTFrom from "./SendOPTFrom";
import CheckOPTFrom from "./CheckOPTFrom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";
import useGetOTPUser from "./useGetOTPUser";


function AuthContainer() {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const {handleSubmit, register, formState:{ errors }, getValues } = useForm();

  const {isPending, otpResponse } = useGetOTPUser();

  const { user } = useUser();

  useEffect(() => {
    if (user)
    {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const sendOtpHandler = async (data) => {
    try {
      // Modified: Pass callbacks to handle response properly
      otpResponse(data, {
        onSuccess: () => {
          setStep(2);
          // Toast is already displayed in the hook's onSuccess callback
        }
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOPTFrom register={register} onSubmit={handleSubmit(sendOtpHandler)}  isPending={isPending} errors={errors}/>;
      case 2:
        return <CheckOPTFrom onBack={() => setStep((s) => s -1)} phoneNumber={getValues("phoneNumber")} onReSendOtp={handleSubmit(sendOtpHandler)} otpResponse={otpResponse}/>;
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
  
}

export default AuthContainer
