import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalApi } from "../../services/proposalService";

export default function useCreateProposal()
{
    const queryClient = useQueryClient();

    const { mutate: createProposal, isPending: isCreating } = useMutation({
        mutationFn: createProposalApi,

        onSuccess: (data) => {
            toast.success(data.message);
    
            queryClient.invalidateQueries({
                queryKey: ["proposals"],
              });
        },

        onError: (error) => {
            toast.error(error?.response?.data?.message);
        }
      });

    return { createProposal, isCreating };
}