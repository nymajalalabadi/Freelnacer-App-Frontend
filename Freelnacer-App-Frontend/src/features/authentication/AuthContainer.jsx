import { useState } from "react";
import SendOPTFrom from "./SendOPTFrom";
import CheckOPTFrom from "./CheckOPTFrom";


function AuthContainer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOPTFrom setStep={setStep} phoneNumber={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>;
      case 2:
        return <CheckOPTFrom phoneNumber={phoneNumber}/>;
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
