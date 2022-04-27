import { defineStore } from "pinia";
import { Food } from '@/interfaces';
import { sleep } from "@/utils";

interface FoodState {
  foods: Food[]
  food: Food
  loading: boolean
}

export const useFoodStore = defineStore('food', {
  state: (): FoodState => ({
    foods: [],
    food: {} as Food,
    loading: false
  }),
  actions: {
    async fetchFoods(): Promise<void> {
      this.loading = true
      const response = await fetch(`http://familiapp.np11.com/calories/food`);
      const data = await response.json();
      console.log(data)
      // await sleep(5000)
      this.foods = data.data
      this.loading = false
    }
  }
})