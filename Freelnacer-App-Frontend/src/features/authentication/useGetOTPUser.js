import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOPT } from "../../services/authService";

export default function useGetOTPUser() {
    const { isPending, mutate: otpResponse } = useMutation({
        mutationFn: getOPT,
    
        onSuccess: (data) => {
          toast.success(data.message);
        },
        
        onError: (err) => toast.error(err?.response?.data?.message),
      });
    
      return { isPending, otpResponse };
}