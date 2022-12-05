<template>
  <div class="wrapper">
    <div class="menu"></div>
    <div class="content">
      <h1 class="title">{{ blog.title }}</h1>
      <p>
        <span v-for="item in blog.tags"
          ># <Orange>{{ item }}</Orange>
        </span>
      </p>
      <p>{{ blog.time }}</p>
      <div v-html="blog.component"></div>
    </div>
  </div>
</template>
<script setup>
  import Prism from "prismjs";
  import { useRoute } from "vue-router";
  import { onMounted } from "vue";
  import blogMenu from "@/blogs/blogMenu";
  import Orange from "@/pages/cv/components/orange.vue";
  const route = useRoute();
  const blog = blogMenu[route.params.blogview];
  onMounted(() => {
    Prism.highlightAll();
  });
</script>
<style lang="scss" scoped>
  .wrapper {
    display: flex;

    .menu {
      width: 25%;
      border: 1px solid red;
    }
    .content {
      width: 75%;
      border: 1px solid red;
      :deep(a) {
        text-decoration: underline;
      }
      h1 {
        font-weight: lighter;
        margin-bottom: 12px;
      }
      p {
        margin-bottom: 12px;
      }
      :deep(*) {
        margin: revert;
      }
    }
  }
</style>
