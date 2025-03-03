import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";
import toast from "react-hot-toast";

export default function useCategories() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Error fetching categories");
    }
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories?.map((category) => ({
    label: category.title,
    value: category._id
  })) || [];

  const transformedCategories = rawCategories?.map((category) => ({
    label: category.title,
    value: category.englishTitle
  })) || [];

  return { 
    isLoading, 
    categories, 
    transformedCategories,
    error: error?.response?.data?.message || "Error fetching categories"
  };
} 