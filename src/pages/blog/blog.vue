<template>
  <div class="blogListWrapper">
    <div class="blogItem">
      <router-link to="/blog/blogview/intersectionObserver"
        >intersectionObserver</router-link
      >
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
  a {
    text-decoration: underline;
  }
  .blogListWrapper {
    display: flex;
    flex-direction: column;
  }
</style>
