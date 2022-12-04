<template>
  <div class="blogListWrapper">
    <div class="blogItem" v-for="blog in blogMenu">
      <h2>
        <router-link :to="blog.url">{{ blog.title }}</router-link>
      </h2>
      <p>{{ blog.info }}</p>
      <p>
        <span v-for="item in blog.tags">#{{ item }}</span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import blogMenu from "@/blogs/blogMenu";
</script>
<style lang="scss" scoped>
  a {
    text-decoration: underline;
  }
  .blogListWrapper {
    display: flex;
    flex-direction: column;
    .blogItem {
      border: 1px solid red;
      display: flex;
      flex-direction: column;
    }
  }
</style>
