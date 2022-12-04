<template>
  <div v-html="blogMap[route.params.blogview]"></div>
</template>
<script setup>
  import Prism from "prismjs";
  import { useRoute } from "vue-router";
  import demo from "@/blogs/markdown/xxx.md";
  import yyy, { attributes } from "@/blogs/markdown/yyy.md";
  import { onMounted } from "vue";
  const route = useRoute();

  const blogMap = {
    demo: demo,
    yyy: yyy,
  };
  console.log(attributes);
  console.log(route.params.blogview);

  onMounted(() => {
    Prism.highlightAll();
  });
</script>
<style lang="scss" scoped>
  :deep(a) {
    text-decoration: underline;
  }
</style>
