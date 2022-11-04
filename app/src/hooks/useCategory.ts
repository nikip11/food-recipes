import useFetch from "@/hooks/useFetch";
import { Category } from "@/interfaces/types";

const API_URL = import.meta.env.VITE_APP_API_URL;

type ResponseCategory = {
  isPending: boolean;
  error: Error | null;
};
interface ResponseGetCategory extends ResponseCategory {
  categories: Category[] | null;
  getCategories: () => Promise<void>;
}

export function useGetCategory(): ResponseGetCategory {
  const { data, executeFetch, error, isPending } = useFetch(
    `${API_URL}fitfood/categories`
  );

  const getCategories = async () => {
    await executeFetch({
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return { categories: data, error, isPending, getCategories };
}

interface ResponseSaveCategory extends ResponseCategory {
  category: Category;
  saveCategory: () => Promise<void>;
}

export function useSaveCategory() {
  const { data, error, isPending, executeFetch } = useFetch(
    `${API_URL}fitfood/categories`
  );

  const saveCategory = async (category: Category) =>
    await executeFetch({
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        "Content-Type": "application/json",
      },
    });

  return { category: data, error, isPending, saveCategory };
}
