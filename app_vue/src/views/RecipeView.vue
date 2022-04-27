<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <ListRecipes :loading="loading" :recipes="recipes" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useRecipeStore } from '@/stores/recipe';
import ListRecipes from '@/components/recipe/ListRecipes.vue';
export default {
  name: "RecipeView",
  components: {
    ListRecipes
  },
  setup() {
    const pageTitle = ref<string>('Listado de Recetas')
    const recipeStore = useRecipeStore()
    const { loading, recipes } = storeToRefs(recipeStore);

    recipeStore.fetchRecipes()

    return {
      loading,
      recipes,
      pageTitle,
    }
  },
};
</script>

<style scoped>
</style>
