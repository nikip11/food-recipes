<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Recipe, Ingredient } from '@/types'

type ReturnType = {
  getIngredient: (ingredient: Ingredient) => string
}

export default defineComponent({
  props: {
    recipe: {
      type: Object as PropType<Recipe>,
      required: true,
      default: () => { }
    },
  },
  setup() {
    function getIngredient(ingredient: Ingredient) {
      const { portion = '', weight = 0, unit = '', food } = ingredient
      return `${weight ?? ''} ${portion ?? ''} ${unit} ${food.title}`
    }

    return {
      getIngredient
    }
  },
})
</script>

<template>
  <div class="card-recipe">
    <h2>titulo: {{ recipe.title }}</h2>
    <p>Calorias: {{ recipe.kalories }}</p>
    <p>pociones {{ recipe.portions }}</p>
    <p>preparacion: {{ recipe.preparation }}</p>
    <ul class="card-recipe_ingredients">
      <li v-for="ingredient in recipe.ingredients" :key="ingredient.food.id">
        <!-- {{ingredient}} -->
        {{ getIngredient(ingredient) }}
      </li>
    </ul>
    {{ recipe.link }}
    {{ recipe.image }}
    <div v-if="recipe.preparation">
      <h3>Preparación</h3>
      <p>{{ recipe.preparation }}</p>
    </div>
    <div class="card-recipe_tags">
      <div v-for="tag in recipe.tags" :key="tag.id" class="card-recipe_tag">{{ tag.title }}</div>
    </div>
  </div>
</template>

<style scoped>
.card-recipe {
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 15px;
  background-color: #eeeeee;
}

.card-recipe_tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
}

.card-recipe_tag {
  background-color: #e5e5e5;
  border-radius: 50%;
  padding: 1.5rem;
  color: #333;
  font-size: 12px;
  font-weight: bold;
  margin-right: 5px;
  padding: 5px 15px;
  text-transform: uppercase;
}

.card-recipe_ingredients {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}
</style>