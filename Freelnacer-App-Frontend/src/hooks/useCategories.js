import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";

export default function useCategories()
{
    const { data, isLoading } = useQuery({
            queryKey: ["categories"],
            queryFn:getCategoryApi
    });

    const { categories : rawCategories = [] } = data || {};

    const categories = rawCategories?.map((category) => ({
        label: category.title,
        value: category._id
    }));

    const transformedCategories = rawCategories?.map((category) => ({
        label: category.title,
        value: category.englishTitle
    }));

    return { isLoading, categories, transformedCategories };
}