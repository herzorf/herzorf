<template>
  <div class="wrapper">
    <div class="menu">
      <p v-for="item in Object.values(blogMenu)">
        <router-link :to="item.url">
          {{ item.title }}
        </router-link>
      </p>
    </div>
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
  a {
    text-decoration: underline;
  }
  .wrapper {
    display: flex;
    padding-top: 20px;
    .menu {
      width: 18%;
      @media (max-width: 576px) {
        padding-top: 25px;
        padding-left: 25px;
        position: fixed;
        width: 70%;
        z-index: 10;
        left: 0;
        top: 0;
        min-height: 100vh;
        border: 1px solid red;
        background-color: #fff;
      }
      p {
        margin-bottom: 24px;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: keep-all;
      }
    }
    .content {
      width: 82%;
      padding-left: 80px;
      padding-bottom: 100px;
      @media (max-width: 576px) {
        padding: 0;
        width: 100%;
      }
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
    @media (max-width: 576px) {
      padding: 0;
      width: 100%;
      h1 {
        font-size: 28px;
      }
    }
  }
</style>
