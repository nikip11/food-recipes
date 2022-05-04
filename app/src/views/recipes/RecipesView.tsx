import Button from "@/components/ui/Button";
import CardRecipe from "@/components/ui/CardRecipe";
import { useEffect } from "react";
import { useGetRecipes } from "./hooks/useRecipes";
import RecipeForm from "./RecipeForm";

export default function RecipesView() {
  const { recipes, getRecipes } = useGetRecipes()
  useEffect(() => {
    getRecipes()
  }, [])
  return (
    <div>
      <h1>Recipes</h1>
      <Button style="icon">+</Button>
      {recipes?.map((recipe) => (
        <CardRecipe recipe={recipe} />
      ))}
      <RecipeForm></RecipeForm>
    </div>
  )
}