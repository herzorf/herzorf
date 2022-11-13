<template>
  <section>
    <MainTitle> 工作经历 </MainTitle>
    <WorkExperience>
      <template #companyName> 上海明略人工智能(集团)有限公司 </template>
      <template #job> 前端开发工程师（React） </template>
      <template #time> 2022/08/01-至今 </template>
      <template #info>
        <ul>
          <li>独立负责<a href="https://socialx.miaozhen.com/register">SocialX</a>2.5版本迭代的前端开发工作</li>
          <li>完成并发布2.5版本的注册账户，忘记密码，词云优化等功能</li>
        </ul>
      </template>
    </WorkExperience>
  </section>
</template>
<script setup lang="ts">
import MainTitle from "./main-title.vue";
import WorkExperience from "./work-experience.vue";
</script>
<style lang="scss" scoped>
section {
  margin-bottom: 2em;

  ul {
    list-style-type: initial;
  }
}
</style>
