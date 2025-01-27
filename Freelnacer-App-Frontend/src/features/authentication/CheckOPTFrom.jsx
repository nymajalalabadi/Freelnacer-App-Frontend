import { useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOPT } from "../../services/authService";
import toast from "react-hot-toast";

function CheckOPTFrom({ phoneNumber }){
    const[opt, setOpt] = useState("");

    const navigate = useNavigate();

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