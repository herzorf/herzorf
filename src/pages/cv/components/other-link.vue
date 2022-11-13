<template>
    <section>
        <MainTitle>其他链接</MainTitle>
        <p><a href="https://www.zhihu.com/people/hezhongfeng/posts">我的博客</a>：里面记录了学习时总结的一些文章</p>
        <p><a href="https://github.com/herzorf">我的Github主页</a>：我的代码仓库</p>
        <p><a href="http://101.34.69.179/#/cv">这个简历的在线链接</a>：http://101.34.69.179/#/cv</p>
    </section>
</template>
<script setup lang="ts">
import MainTitle from './main-title.vue';


</script>
<style lang="scss" scoped>
section {
    margin-top: 16px;

    p {
        margin-top: 2em;
        display: flex;
    }
}
</style>