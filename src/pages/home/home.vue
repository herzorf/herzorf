<template>
        <Header />
        <div class="personalInfo">
            <h1>Herzorf</h1>
            <h1>一个web开发工程师</h1>
            <h1>base in shanghai</h1>
        </div>
</template>

<script setup lang="ts" name="home">
import Header from '@/components/header/header.vue';

</script>
<style scoped lang="scss">

.personalInfo{
    border: 1px solid red;
    height: 60vh;
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-weight:100;
        font-size: 64px;
        margin-bottom: 10px;
    }
}

</style>