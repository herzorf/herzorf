<template>
  <section>
    <MainTitle>我的项目</MainTitle>
    <ProjectExperience>
      <template #projectName> Herzorf的个人空间 </template>
      <template #link>
        <span><a href="http://101.34.69.179/#/">预览地址 </a>

          <a href="https://github.com/herzorf/herzorf">源码链接</a></span>
      </template>
      <template #info>
        这是一个个人空间项目，里面包含了我的个人简介和博客，使用
        <Orange>Vue3，TypeScript，Vite</Orange>编写，采用<Orange>Github Action + Docker + 腾讯云</Orange>
        进行自动化部署。编写这个项目既是为了搭建一个个人空间，也是为了在公司使用React开发的情况下不忘记Vue3的开发。
      </template>
    </ProjectExperience>
    <ProjectExperience>
      <template #projectName> Vue3 造轮子 </template>
      <template #link>
        <span><a href="https://herzorf.github.io/Vue3.0-UI-website/index.html#/">预览地址 </a>
          <a href="https://github.com/herzorf/Vue3.0-UI">源码链接</a></span>
      </template>
      <template #info>
        这个项目是2020年我学了一点
        <Orange>Vue3</Orange>
        之后做的一个UI库，共有四个组件,项目搭建使用的是Vite,全部使用的是<Orange>Composition API</Orange>,并模仿<Orange> Dribble</Orange>上的一个页面设计了一个官网。
        主要技术栈是
        <Orange>Vue3和TS</Orange>,虽然没用涉及到全部的语法规则,但也为我以后更深入的学习Vue3和TS打下了基础。
      </template>
    </ProjectExperience>
    <ProjectExperience>
      <template #projectName>记账薄</template>
      <template #link><span><a href="https://github.com/herzorf/purse-vue">Vue2版本源码 </a>
          <a href="https://github.com/herzorf/where-is-my-money">React版本源码</a></span>
      </template>
      <template #info>这两个项目是2020年学习<Orange>React</Orange>和<Orange>Vue2</Orange>时写的一个记账项目，功能包括<Orange>记账，查账，删除记录,编辑记账类型
        </Orange>等功能，数据存储在<Orange>LocalStorage</Orange>中，这两个项目所涉及的技术栈包括<Orange>Vue2 / React / React(Vue) Router /
          TypeScript</Orange>。</template>
    </ProjectExperience>
    <ProjectExperience>
      <template #projectName>图片云存储系统</template>
      <template #link><span><a href="https://github.com/herzorf/filestore-server">go源码链接</a></span>
      </template>
      <template #info>在熟悉go的基本语法之后，使用<Orange>go，gin，mysql，腾讯云COS</Orange>
        实现的一个图片云存储系统，涉及注册，登录，上传图片，预览图片，下载图片，删除图片等功能。</template>
    </ProjectExperience>
  </section>
</template>
<script setup lang="ts">
import MainTitle from "./main-title.vue";
import Orange from "./orange.vue";
import ProjectExperience from "./project-experience.vue";
</script>
<style lang="scss" scoped>

</style>
