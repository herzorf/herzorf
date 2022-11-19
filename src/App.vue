<template>
  <Header v-if="path !== '/cv'" />
  <router-view></router-view>
  <sideMenu :class="sideMenuVisible.visible && 'visible'" />
</template>

<script setup lang="ts" name="cv">
  import Header from "./components/header/header.vue";
  import { useRoute } from "vue-router";
  import { ref, watch } from "vue";
  import { useCounterStore } from "@/globalStore/globalStore";
  import sideMenu from "@/components/sideMenu/sideMenu.vue";

  const sideMenuVisible = useCounterStore();
  console.log(sideMenuVisible.visible);

  const route = useRoute();
  const path = ref("");
  watch(
    () => route.path,
    async () => {
      path.value = route.path;
    }
  );
</script>

<style scoped></style>
