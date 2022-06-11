import { AddIcon } from "@/components/Icons";
import useModal from "@/components/ui/Alert/hooks/useModal";
import Button from "@/components/ui/Button";
import CardRecipe from "@/components/ui/CardRecipe";
import MiniLoading from "@/components/ui/MiniLoading";
import { Modal } from "@/components/ui/Modal";
import { Recipe } from "@/interfaces/types";
import { useEffect, useState } from "react";
import { useGetRecipes } from "./hooks/useRecipes";
import RecipeForm from "./RecipeForm";

export default function RecipesView() {
  const { recipes, getRecipes, isPending } = useGetRecipes()
  const { isOpen, openModal, closeModal } = useModal(false)
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)

  function handleCloseModal() {
    closeModal()
  }

  function handleOpenModal() {
    setSelectedRecipe(null)
    openModal()
  }

  useEffect(() => {
    getRecipes()
  }, [])

  if (isPending) {
    return <MiniLoading />
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1>Recipes</h1>
        <Button style="icon" onClick={handleOpenModal}><AddIcon /></Button>
      </div>
      {recipes?.map((recipe) => (
        <CardRecipe recipe={recipe} onEdit={() => {
          setSelectedRecipe(recipe)
          openModal()
        }}
          key={recipe.id} />
      ))}
      <Modal isOpen={isOpen} closeModal={handleCloseModal} title={selectedRecipe ? "Edit Recipe" : "New Recipe"}>
        <RecipeForm formData={selectedRecipe} />
      </Modal>
    </div>
  )
}