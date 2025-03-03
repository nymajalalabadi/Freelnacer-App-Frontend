import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../../services/projectService";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id),
    retry: false,
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Error fetching project details");
      navigate("/projects");
    }
  });

  const { project } = data || {};

  return { 
    isLoading, 
    project,
    error: error?.response?.data?.message || "Error fetching project details"
  };
} 