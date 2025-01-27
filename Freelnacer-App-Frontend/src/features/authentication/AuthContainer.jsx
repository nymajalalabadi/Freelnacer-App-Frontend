import { useState } from "react";
import SendOPTFrom from "./SendOPTFrom";
import CheckOPTFrom from "./CheckOPTFrom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOPT } from "../../services/authService";


function AuthContainer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: getOPT,
  })

  const sendOptsHandler = async (e) => {
    e.preventDefault();
    try{
    const data =  await mutateAsync({phoneNumber});
    setStep(2);
    toast.success(data.message)
    } catch(error){
      toast.error(error?.response?.data?.message);
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOPTFrom phoneNumber={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} isPending={isPending} sendOptsHandler={sendOptsHandler}/>;
      case 2:
        return <CheckOPTFrom onBack={() => setStep((s) => s -1)} phoneNumber={phoneNumber} onReSendOtp={sendOptsHandler} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full sm:max-w-sm">
        {renderStep()}
    </div>
  )
}

export default AuthContainer
