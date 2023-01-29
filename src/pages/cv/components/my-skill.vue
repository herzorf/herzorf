<template>
  <section>
    <MainTitle>我的技能</MainTitle>
    <ul>
      <li>
        熟练掌握HTML5和CSS3，熟悉<Orange
          >传统布局，Flex布局，Grid布局和移动端适配</Orange
        >
      </li>
      <li>
        掌握
        <Orange>React全家桶</Orange
        >的使用，包括React，React-Router，Redux，Hooks等
      </li>
      <li>熟悉<Orange>ES6</Orange> 和<Orange>SCSS</Orange>，了解ES6新特性</li>
      <li>了解<Orange>前后端分离技术</Orange>，包括AJAX，Axios，跨域等</li>

      <li>了解 <Orange>Vue3</Orange>并使用Vue3和Element Plus开发过个人项目</li>
      <li>
        熟练掌握
        <Orange>TypeScript</Orange>的使用和<Orange>Webpack</Orange>的简单配置
      </li>
      <li>
        了解
        <Orange> go</Orange>，使用go，gin框架，腾讯云COS开发过个人图片云存储系统
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
  import MainTitle from "./main-title.vue";
  import Orange from "./orange.vue";
</script>
<style lang="scss" scoped>
  section {
    margin-bottom: 30px;

    ul {
      list-style-type: initial;
      margin-left: 40px;
      margin-top: 24px;

      li {
        margin-bottom: 6px;
      }
    }
  }
</style>
