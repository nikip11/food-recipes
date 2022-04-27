
<template>
  <ul class="navbar">
    <li v-for="item in menu">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>
<script lang="ts" setup>
const menu = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/food',
    name: 'Food',
  }
]
</script>
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
