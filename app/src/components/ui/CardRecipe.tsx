import { Recipe } from "@/interfaces/types";

export default function CardRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <div className="">
      <div className="">
        <h1>{recipe.title}</h1>
        <ul>
          {recipe.ingredients.map((ingredient) => (<li>{ingredient.food.title}</li>))}
        </ul>
        <p>{recipe.preparation}</p>
      </div>
    </div>
  )
}
