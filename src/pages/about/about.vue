<template>
  <div class="about">
    <h2>何中峰(Herzorf)</h2>
    <p>
      Hi,
      我是何中峰，一名正在学习的初级前端，目前就职于上海明略人工智能(集团)有限公司，工作中使用的技术栈是React，目前处于什么都在学的阶段，CSS，JavaScript，React，Vue3。。。
    </p>
    <p>
      目标是自己可以独立开发一款应用，熟悉一些经典框架或者库的源码，并且自己也可以写一些有意思的库或者框架。喜欢开源文化
      ，梦想有一天可以参与开源项目的开发，期待与志同道合的伙伴共建一个有价值、有活力、有温度的开源社区！
    </p>
    <p>
      编程之外，喜欢做饭，吃自己做的饭真的太香了。还喜欢到处闲逛，如果偶遇，可以一起吃个饭🥳。
    </p>
  </div>
</template>
<script setup lang="ts" name="about">
  import Header from "../../components/header/header.vue";
</script>
<style scoped lang="scss">
  .about {
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 36px 64px;
    @media (max-width: 576px) {
      padding: 12px;
    }
    h2 {
      margin-bottom: 24px;
    }

    p {
      margin-bottom: 1em;
    }
  }
</style>
