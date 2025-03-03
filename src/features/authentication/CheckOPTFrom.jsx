import { useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState, useCallback } from "react";
import OTPInput from "react-otp-input";
import { checkOPT } from "../../services/authService";
import toast from "react-hot-toast";
import { HiArrowLeft } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from '../../ui/Loading';

const RESEND_TIME = 90;

function CheckOPTFrom({ onBack, phoneNumber, onReSendOtp, otpResponse }) {
    const [otp, setOtp] = useState("");
    const [time, setTime] = useState(RESEND_TIME);
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const navigate = useNavigate();

    const { mutateAsync, isPending } = useMutation({
        mutationFn: checkOPT,
    });

    const resetTimer = useCallback(() => {
        setTime(RESEND_TIME);
        setIsResendDisabled(true);
    }, []);

    useEffect(() => {
        let timer;
        if (time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 1) {
                        setIsResendDisabled(false);
                        clearInterval(timer);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [time]);

    const handleResendOtp = async () => {
        try {
            await onReSendOtp({ phoneNumber });
            resetTimer();
            toast.success("New code sent successfully");
        } catch (error) {
            toast.error(error?.response?.data?.message || "Error sending new code");
        }
    };

    const checkOtpHandler = async (e) => {
        e.preventDefault();
        if (otp.length !== 6) {
            toast.error("Please enter a 6-digit code");
            return;
        }

        try {
            const { message, user } = await mutateAsync({ phoneNumber, otp });
            toast.success(message);

            if (!user.isActive) {
                navigate("/complete-profile");
                return;
            }

            if (user.status !== 2) {
                navigate("/");
                toast("Please wait for admin approval", { icon: "⏳" });
                return;
            }

            switch (user.role) {
                case "OWNER":
                    navigate("/owner");
                    break;
                case "FREELNACER":
                    navigate("/freelnacer");
                    break;
                case "ADMIN":
                    navigate("/admin");
                    break;
                default:
                    navigate("/");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Error verifying code");
            setOtp("");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <button onClick={onBack} className="flex items-center gap-x-2 text-secondary-700">
                    <HiArrowLeft className="w-6 h-6" />
                    <span>Back</span>
                </button>
                <button onClick={onBack} className="flex items-center gap-x-2 text-secondary-700">
                    <CiEdit className="w-6 h-6" />
                    <span>Change Number</span>
                </button>
            </div>

            <div className="text-center">
                <h2 className="text-xl font-bold text-secondary-700">Enter Verification Code</h2>
                <p className="text-secondary-500 mt-2">
                    Verification code sent to {phoneNumber}
                </p>
            </div>

            <form onSubmit={checkOtpHandler} className="space-y-6">
                <div className="flex justify-center">
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{
                            width: "40px",
                            height: "40px",
                            margin: "0 4px",
                            fontSize: "16px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            textAlign: "center"
                        }}
                        containerStyle={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "8px"
                        }}
                    />
                </div>

                <div className="text-center">
                    {time > 0 ? (
                        <p className="text-secondary-500">
                            Resend code in {time} seconds
                        </p>
                    ) : (
                        <button
                            type="button"
                            onClick={handleResendOtp}
                            disabled={isResendDisabled || isPending}
                            className="text-primary-600 hover:text-primary-700 disabled:opacity-50"
                        >
                            Resend Code
                        </button>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={otp.length !== 6 || isPending}
                    className="btn btn--primary w-full disabled:opacity-50"
                >
                    {isPending ? <Loading /> : "Verify"}
                </button>
            </form>
        </div>
    );
}

export default CheckOPTFrom; 