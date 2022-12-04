<template>
  <div v-html="blogMenu[route.params.blogview]"></div>
</template>
<script setup>
  import Prism from "prismjs";
  import { useRoute } from "vue-router";
  import { onMounted } from "vue";
  import blogMenu from "@/blogs/blogMenu";
  const route = useRoute();

  onMounted(() => {
    Prism.highlightAll();
  });
</script>
<style lang="scss" scoped>
  :deep(a) {
    text-decoration: underline;
  }
</style>
