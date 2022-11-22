<template>
  <section>
    <MainTitle>开源项目</MainTitle>
    <OtherProjectItem>
      <template #name>会动的皮卡丘</template>
      <template #info> 一个用定时器实现的动画 </template>
      <template #link>
        <a href="https://github.com/herzorf/Draw-pikachu">源码链接</a>
        <a href="https://herzorf.github.io/Draw-pikachu/write.html">预览地址</a>
      </template>
    </OtherProjectItem>
    <OtherProjectItem>
      <template #name>大屏可视化</template>
      <template #info> 用Echars + React实现的大屏可视化 </template>
      <template #link>
        <a href="https://github.com/herzorf/bigScreen">源码链接</a>
        <a href="https://he_zhongfeng.gitee.io/big-screen/#/"></a> 预览地址
      </template>
    </OtherProjectItem>
    <OtherProjectItem>
      <template #name>个人网站导航</template>
      <template #info> 使用JQuery实现的一个网站导航 </template>
      <template #link>
        <a href="https://github.com/herzorf/Navigation-webpage">源码链接</a>
        <a href="https://he_zhongfeng.gitee.io/navigation-webpage/index.html"
          >预览地址</a
        >
      </template>
    </OtherProjectItem>
  </section>
</template>
<script setup lang="ts">
  import MainTitle from "./main-title.vue";
  import OtherProjectItem from "./other-project-item.vue";
</script>
<style lang="scss"></style>
