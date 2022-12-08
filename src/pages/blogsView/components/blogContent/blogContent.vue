<template>
  <div class="wrapper">
    <div :class="`menu ${menuVisible && 'display'}`">
      <div class="closeMenu" @click="menuVisible = false">x</div>
      <p v-for="item in Object.values(blogMenu)">
        <router-link @click="menuVisible = false" :to="item.url">
          {{ item.title }}
        </router-link>
      </p>
    </div>
    <div class="content" @click="() => (menuVisible = false)">
      <h1 class="title">{{ blog.title }}</h1>
      <p>
        <span v-for="item in blog.tags"
          ># <Orange>{{ item }}</Orange>
        </span>
      </p>
      <p>{{ blog.time }}</p>
      <div v-html="blog.component"></div>
    </div>
    <div class="switch" @click="openMenu">
      <Svg class="rightArrow"></Svg>
    </div>
  </div>
</template>
<script setup>
  import Prism from "prismjs";
  import { useRoute } from "vue-router";
  import { onMounted, ref } from "vue";
  import blogMenu from "@/blogs/blogMenu";
  import Orange from "@/pages/cv/components/orange.vue";
  import Svg from "@/components/svg/svg.vue";
  const route = useRoute();
  const blog = blogMenu[route.params.blogview];
  const menuVisible = ref(false);
  const openMenu = () => {
    menuVisible.value = !menuVisible.value;
  };
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
      transition: 0.5s;
      @media (max-width: 576px) {
        transform: translateX(-100%);
        padding-top: 125px;
        padding-left: 25px;
        position: fixed;
        width: 70%;
        z-index: 10;
        left: 0;
        top: 0;
        min-height: 100vh;
        background-color: #fff;
        &.display {
          transform: translateX(0);
        }
      }
      p {
        margin-bottom: 24px;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: keep-all;
      }
      .closeMenu {
        position: relative;
        top: -60px;
        display: inline;
        left: 70%;
        font-size: 40px;
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
    .switch {
      position: fixed;
      left: 5px;
      top: 50%;
      width: 50px;
      height: 50px;
      font-size: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 50%;
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
