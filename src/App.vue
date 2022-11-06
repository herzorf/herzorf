
<template>
  <Header v-if="path !== '/cv'"/>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts" name="cv">
import Header from './components/header/header.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const route = useRoute()
const path = ref("")
watch(() => route.path, async () => { path.value = route.path })


</script>

<style scoped>
.wrapper {
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
