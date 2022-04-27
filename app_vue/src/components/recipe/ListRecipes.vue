<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Recipe } from '@/types'
import CardRecipe from './CardRecipe.vue'

export default defineComponent({
  components: {
    CardRecipe,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    recipes: {
      type: Array as PropType<Recipe[]>,
      required: true,
      default: () => []
    },
  },
  setup() {

  },
})
</script>

<template>
  <div v-if="loading">
    loading ...
  </div>
  <div v-else>
    <div v-for="recipe in recipes" :key="recipe.id">
      <CardRecipe :recipe="recipe" />
    </div>
  </div>
</template>

<style scoped>
</style>