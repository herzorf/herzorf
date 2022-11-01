
<template>
  <Header />
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Header from './components/header/header.vue';
</script>

<style scoped>
.wrapper {
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
