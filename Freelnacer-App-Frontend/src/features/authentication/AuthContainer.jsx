import { useState } from "react";
import SendOPTFrom from "./SendOPTFrom";
import CheckOPTFrom from "./CheckOPTFrom";


function AuthContainer() {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOPTFrom setStep={setStep}/>;
      case 2:
        return <CheckOPTFrom />;
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
