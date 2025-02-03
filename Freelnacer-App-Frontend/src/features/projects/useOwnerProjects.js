import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectApi } from "../../services/projectService";


export default function useOwnerProjects() {
  const { data, isLoading } = useQuery ({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectApi,
    retry: false
  });

  const { projects } = data || {};

  return { isLoading, projects }
}
