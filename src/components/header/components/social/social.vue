<template>
  <div class="social">
    <div class="socialItem">
      <a href="https://www.zhihu.com/people/hezhongfeng">
        <Svg class="zhihublack"></Svg>
      </a>
    </div>
    <div class="socialItem">
      <a href="https://github.com/herzorf">
        <Svg class="githubblack"></Svg>
      </a>
    </div>
    <div class="socialItem">
      <a href="https://juejin.cn/user/3122268755467566/posts">
        <Svg class="juejinblack"></Svg>
      </a>
    </div>
    <div class="socialItem">
      <a href="https://twitter.com/herzorf">
        <Svg class="twitterblack"></Svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Svg from "../../../svg/svg.vue";
</script>
<style lang="scss">
  .social {
    flex-grow: 0.3;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;

    .socialItem {
      cursor: pointer;
    }
  }
</style>
