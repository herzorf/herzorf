<template>
  <div class="blogListWrapper">
    <div class="blogItem">
      <router-link to="/blog/blogview/demo">demo</router-link>
    </div>
    <div class="blogItem">
      <router-link to="/blog/blogview/yyy">yyy</router-link>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
  a {
    text-decoration: underline;
  }
  .blogListWrapper {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
  }
</style>
