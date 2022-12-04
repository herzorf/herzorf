<template>
  <h1>{{ blog.title }}</h1>
  <p>
    <span v-for="item in blog.tags">#{{ item }}</span>
  </p>
  <div v-html="blog.component"></div>
</template>
<script setup>
  import Prism from "prismjs";
  import { useRoute } from "vue-router";
  import { onMounted } from "vue";
  import blogMenu from "@/blogs/blogMenu";
  const route = useRoute();
  const blog = blogMenu[route.params.blogview];
  onMounted(() => {
    Prism.highlightAll();
  });
</script>
<style lang="scss" scoped>
  :deep(a) {
    text-decoration: underline;
  }
</style>
