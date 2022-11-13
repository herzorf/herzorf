<template>
    <section>
        <MainTitle>关于我</MainTitle>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我<Orange>2022年7月</Orange> 毕业于西北大学，软件工程专业。<Orange>八月</Orange> 入职上海明略人工智能(集团)有限公司，智能会话部门，担任 <Orange>初级前端开发工程师</Orange> 岗位,工作中主要使用的技术栈为<Orange>ES6,React,TypeScript</Orange>,工作之余也会用 <Orange>Vue3,Vite</Orange> 开发一些自己的项目。平时会通过看博客，看书，看教学视频，做项目来提高自己的技术水平。<Orange>喜欢开源文化</Orange> ，梦想有一天可以参与开源项目的开发，期待与志同道合的伙伴共建一个有价值、有活力、有温度的开源社区！编程之余喜欢 <Orange>看电影，看书，出门闲逛，拍拍照</Orange> ，隔三差五也会运动。</p>
    </section>
</template>
<script setup lang="ts">
import MainTitle from './main-title.vue';
import Orange from './orange.vue';

</script>
<style lang="scss" scoped>
section {
    margin-top: 30px;

    p {
        margin-top: 16px;
    }
}
</style>