<template>
  <div class="blogListWrapper">
    <div class="blogItem" v-for="blog in blogMenu">
      <h1>
        <router-link :to="blog.url">{{ blog.title }}</router-link>
      </h1>
      <p class="info">{{ blog.info }}</p>
      <p class="tags">
        <span v-for="item in blog.tags">
          #<Orange>{{ item }} </Orange></span
        >
      </p>
      <p>{{ blog.time }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import blogMenu from "@/blogs/blogMenu";
  import Orange from "../cv/components/orange.vue";
</script>
<style lang="scss" scoped>
  a:hover {
    text-decoration: underline;
  }
  .blogListWrapper {
    padding: 50px 50px 50px 100px;
    display: flex;
    flex-direction: column;
    .blogItem {
      display: flex;
      flex-direction: column;
      h1 {
        font-weight: lighter;
        margin-bottom: 6px;
      }
      .info {
        color: rgb(123, 123, 123);
        font-size: 14px;
        margin-bottom: 6px;
      }
      .tags {
        font-size: 14px;
      }
    }
  }
</style>
