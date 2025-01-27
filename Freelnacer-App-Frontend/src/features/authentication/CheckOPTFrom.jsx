import { useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOPT } from "../../services/authService";
import toast from "react-hot-toast";
import { HiArrowLeft } from "react-icons/hi";

const RESEND_TIME = 90;

function CheckOPTFrom({ onBack, phoneNumber, onReSendOtp }){
    const[opt, setOpt] = useState("");
    const [time, setTime] = useState(RESEND_TIME);

    const navigate = useNavigate();

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
        return () => {
          if (timer) 
          {
            clearInterval(timer)
          };
        };
    }, [time]);


    const { mutateAsync, isPending, error, data } = useMutation({
        mutationFn: checkOPT,
    });

    const checkOtpHandler = async (e) => {
        e.preventDefault();
        try {
            const { message, user } = await mutateAsync({ phoneNumber, opt });
            toast.success(message);
            if(user.isActive)
            {
                //if(user.role === "OWNER") navigate("/owner");
                //if(user.role === "FREELNACER") navigate("/freelnacer");
            }
            else{
                // navigate("/complete-profile");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    return(
        <div>
            <button onClick={onBack}>
                <HiArrowLeft  className="w-6 h-6 text-secondary-500"/>
            </button>
            <div className="mb-4 text-secondary-500">
                {time > 0 ? (
                <p> {time} seconds until code resend </p>
                
                ) : (
                <button onClick={onReSendOtp}>Resend verification code</button>
                )}
            </div>
            <form className="space-y-10" onSubmit={checkOtpHandler}>
                <p className="font-bold text-secondary-800">Enter the verification code :</p>
                <OTPInput value={opt} onChange={e => setOpt(e.target.value)} 
                numInputs={6} renderSeparator={<span>-</span>} renderInput={(props) => <input type="number" {...props}/>} 
                containerStyle="flex flex-row-reverse gap-x-2  justify-center"
                inputStyle={{
                    width: "2.5rem",
                    padding: "0.5rem 0.2rem",
                    border: "1px solid rgb(var(--color-primary-400))",
                    borderRadius: "0.5rem",
                  }}
                />
                <button className="btn btn--primary w-full">Submit</button>
            </form>
        </div>
    );
}

export default CheckOPTFrom; 