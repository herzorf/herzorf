<template>
  <div v-html="demo"></div>
</template>
<script setup>
  import Prism from "prismjs";

  import { useRoute } from "vue-router";
  import demo from "@/blogs/markdown/xxx.md";
  import { onMounted } from "vue";
  const route = useRoute();
  console.log(route.params);

  onMounted(() => {
    Prism.highlightAll();
  });
</script>
<style lang="scss" scoped>
  ::v-deep a {
    text-decoration: underline;
  }
</style>
