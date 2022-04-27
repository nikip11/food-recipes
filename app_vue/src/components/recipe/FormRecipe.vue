<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Recipe } from '@/types'

// const formRecipe = [
//   {
//     label: 'Título',
//     input: 'text',
//     model: 'recipe.title'
//   }
// ]



export default defineComponent({
  props: {
    recipe: {
      type: Object as PropType<Recipe>,
      default: () => { }
    },
  },
  setup() {
    function handleSubmit() {

    }
    return {
      handleSubmit
    }
  },
})
</script>

<template>
  <h1>Nueva receta</h1>
  <form>
    <div class="form-group">
      <label for="title">Titulo</label>
      <input type="text" class="form-control" id="title" v-model="recipe.title" />
    </div>
    <div class="form-group">
      <label for="preparation">Preparación</label>
      <textarea class="form-control" id="preparation" v-model="recipe.preparation"></textarea>
    </div>

    <div class="form-group">
      <label for="image">Imagen</label>
      <input type="text" class="form-control" id="image" v-model="recipe.image" />
    </div>
    <div class="form-group">
      <label for="link">Enlace</label>
      <input type="text" class="form-control" id="link" v-model="recipe.link" />
    </div>
    <div class="form-group">
      <label for="portions">Porciones</label>
      <input type="number" class="form-control" id="portions" v-model="recipe.portions" />
    </div>

    <div class="form-group">
      <label for="time">Tiempo de preparación</label>
      <input type="text" class="form-control" id="time" v-model="recipe.time" />
    </div>

    <div class="form-group">
      <label for="tags">Etiquetas</label>
      <input type="text" class="form-control" id="tags" v-model="recipe.tags" />
    </div>


    <button type="submit" :click="handleSubmit()"></button>
  </form>

</template>



<style scoped>
</style>