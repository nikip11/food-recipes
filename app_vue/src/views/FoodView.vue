<template>
  <div>
    <h1>Listado de alimentos</h1>
    <GridTable :items="foods" :columns="columns" :loading="loading" />
  </div>
</template>

<script lang="ts">
import { useFoodStore } from "@/stores/food";
import GridTable from "@/components/GridTable.vue";
import { Food } from '@/types';
import { storeToRefs } from "pinia";

export default {
  name: "FoodView",
  components: {
    GridTable
  },
  setup() {
    const foodStore = useFoodStore();
    const { loading, foods } = storeToRefs(foodStore);

    foodStore.fetchFoods()

    const columns = [
      {
        accesor: "title",
        label: "Nombre",
      },
      {
        accesor: "value100",
        label: "Calorias",
      },
      {
        accesor: "category.title",
        label: "Categoría",
      },
      {
        accesor: "",
        label: "",

      }
    ];

    return {
      loading,
      foods,
      columns,
    };
  },
};
</script>

<style scoped>

</style>
