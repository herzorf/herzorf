<template>
  <div v-html="demo"></div>
</template>
<script setup lang="ts">
  import { useRoute } from "vue-router";
  import demo from "@/blogs/markdown/xxx.md";
  const yyy = useRoute();
  console.log(yyy.params);
</script>
<style lang="scss" scoped></style>
