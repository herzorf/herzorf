<template>
    <div class="about">
        <h2>何中峰(Herzorf)</h2>
        <p>Hi, 我是何中峰，一名正在学习的初级前端，目前处于什么都在学的阶段，CSS，JavaScript，React，Vue3。。。学习的方法大都是通过看书先构建一个知识体系，然后再进行coding去熟悉它的设计思想。
        </p>
        <p>目标是自己可以独立开发一款应用，熟悉一些经典框架或者库的源码，并且自己也可以写一些有意思的库或者框架。</p>
        <p>编程之外，喜欢做饭，吃自己做的饭真的太香了。</p>
    </div>
</template>
<script setup lang="ts" name="about">
import Header from '../../components/header/header.vue';
</script>
<style scoped lang="scss">
.about {
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 36px 64px;

    h2 {
        margin-bottom: 24px;
    }

    p {
        margin-bottom: 1em;
    }
}
</style>