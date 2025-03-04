import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeProfile } from "../../services/authService";

export default function useCompleteProfile() {
    const { isPending: isUpdating, mutate: completeProfileUser } = useMutation({
        mutationFn: completeProfile,
    
        onSuccess: (data) => {
          toast.success(data.message);
        },
        
        onError: (err) => toast.error(err?.response?.data?.message),
      });
    
      return { isUpdating, completeProfileUser };
}