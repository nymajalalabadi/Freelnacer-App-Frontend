import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProject()
{
    const queryClient = useQueryClient();

    const { mutate: createProject, isPending: isCreating } = useMutation({
        mutationFn: CreateProjectApi,
        onSuccess: (data) => {
            toast.success(data.message);
    
            queryClient.invalidateQueries({
                queryKey: ["owner-projects"],
              });
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message);
        }
      });

    return { createProject, isCreating };
}