import { Recipe, Tag } from "@/interfaces/types";
import { EditIcon, TrashIcon } from "@/components/Icons";
import MiniButton from "@/components/ui/MiniButton";
import Portions from "./Portions";

type Props = {
  recipe: Recipe;
  onDelete?: (recipe: Recipe) => void;
  onEdit?: (recipe: Recipe) => void;
}

export default function CardRecipe(props: Props) {
  const { recipe, onDelete, onEdit } = props;
  return (
    <div className="mb-3 border-b-2 relative">
      <div className="absolute top-0 right-0">
        {onDelete && <MiniButton
          type="button"
          onClick={() => {
            onDelete(recipe)
          }}>
          <TrashIcon />
        </MiniButton>
        }
        {onEdit &&
          <MiniButton
            type="button"
            onClick={() => {
              onEdit(recipe)
            }}>
            <EditIcon />
          </MiniButton>
        }
      </div>
      <h1 className="size-2 text-2xl">{recipe.title}</h1>
      <div className="inline-grid gap-2 grid-cols-3">
        {recipe.kalories && (
          <div>Calorías: {recipe.kalories}</div>
        )}
        {recipe.portions && <Portions portions={recipe.portions} />}
        {recipe.time && (
          <div>Tiempo: {recipe.time}</div>
        )}
      </div>
      <div>
        {recipe.image && (<img src={recipe.image} alt={recipe.title} />)}
        {recipe.link && (<a href={recipe.link}>{recipe.link}</a>)}
      </div>
      {recipe.ingredients.length > 0 && (
        <div className="">
          <h2>Ingredientes:</h2>
          <ul className="">
            {recipe.ingredients.map((ingredient) => (<li key={ingredient.food.id}>{ingredient.food.title}</li>))}
          </ul>
        </div>
      )}
      {recipe.preparation && (
        <div className="">
          <div>Preparación</div>
          <p>{recipe.preparation}</p>
        </div>
      )}

      {recipe?.tags?.length > 0 && (
        <div className="py-4">
          {recipe.tags?.map((tag: Tag) => (
            <span className="py-2 px-4 bg-yellow-400 rounded-full mr-2" key={tag.id}>{tag.title}</span>
          ))}
        </div>
      )}
    </div >
  )
}
