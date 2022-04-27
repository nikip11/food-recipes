<script lang="ts" setup>
type MenuItem = {
    path: string,
    name: string,
    icon?: string,
}
const menu: MenuItem[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/food",
    name: "Food",
  },
  {
    path: "/recipes",
    name: "Recipes",
  },
];
</script>
<template>
  <ul class="navbar">
    <li v-for="item in menu" :key="item.name">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar {
  margin-bottom: 20px;
  display: flex;
  list-style: none;
  justify-content: center;
}
.navbar li {
  margin: 0 10px;
}
</style>
