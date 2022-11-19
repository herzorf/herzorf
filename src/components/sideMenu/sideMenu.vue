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
    <div class="x" @click="sideMenuVisible.visible = false">x</div>
    <Social />
  </div>
</template>
<script setup lang="ts">
  import Social from "../header/components/social/social.vue";
  import { useCounterStore } from "@/globalStore/globalStore";
  import { onMounted, watch } from "vue";
  import { useRoute } from "vue-router";

  const sideMenuVisible = useCounterStore();
  const route = useRoute();
  console.log(route.path);
  onMounted(() => {
    watch(
      () => route.path,
      async (path) => {
        console.log(path);
        sideMenuVisible.visible = false;
      }
    );
  });
</script>
<style lang="scss" scoped>
  .sideMenu {
    background: #fff;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: 100%;
    width: 300px;
    max-width: 100%;
    ul {
      padding: 60px 40px;
      li {
        margin-bottom: 40px;
      }
    }
    .x {
      position: absolute;
      right: 30px;
      font-size: 40px;
      top: 30px;
      cursor: pointer;
    }
  }
</style>
