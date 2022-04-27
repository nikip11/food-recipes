import { defineStore } from "pinia";
import { Food } from '@/interfaces';

interface FoodState {
  foods: Food[]
  food: Food
}

export const useFoodStore = defineStore('food', {
  state: (): FoodState => ({
    foods: [],
    food: {} as Food
  }),
  actions: {
    async fetchFoods(): Promise<void> {
      const response = await fetch(`http://familiapp.np11.com/calories/food`);
      const data = await response.json();
      console.log(data)
      this.foods = data.data
    }
  }
})