<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <FormRecipe />
  </div>
</template>
<script lang="ts">

import FormRecipe from '@/components/recipe/FormRecipe.vue';
import { ref } from 'vue-demi';
export default {
  components: {
    FormRecipe,
  },
  setup() {
    const pageTitle = ref('Formulario de Recetas')
    return {
      pageTitle,
    }
  },
}
</script>