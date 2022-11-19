<template>
  <div class="sideMenu">
    <ul>
      <li>
        <router-link to="about">About</router-link>
      </li>
      <li>
        <router-link to="blog">Blog</router-link>
      </li>
    </ul>
    <Social />
  </div>
</template>
<script setup lang="ts">
  import Social from "../header/components/social/social.vue";
</script>
<style lang="scss">
  .sideMenu {
    border: 1px solid red;
  }
</style>
