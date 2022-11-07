
<template>
  <Header v-if="path !== '/cv'"/>
    <router-view></router-view>
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

</style>
