import { defineStore } from "pinia";
import { Recipe } from '@/types';
import { sleep } from "@/utils";

interface RecipeState {
  recipes: Recipe[]
  recipe: Recipe
  loading: boolean
}

export const useRecipeStore = defineStore('recipe', {
  state: (): RecipeState => ({
    recipes: [],
    recipe: {} as Recipe,
    loading: false
  }),
  actions: {
    async fetchRecipes(): Promise<void> {
      this.loading = true
      const response = await fetch(`http://familiapp.np11.com/calories/recipe/all`);
      const data = await response.json();
      console.log(data)
      // await sleep(5000)
      this.recipes = data.data
      this.loading = false
    }
  }
})