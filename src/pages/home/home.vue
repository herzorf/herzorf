<template>
        <Header />
        <section class="personalInfo">
            <h1>Herzorf</h1>
            <h1>一个web开发工程师</h1>
            <h1>base in shanghai</h1>
        </section>
        <section class="personalData">
            <div class="left">
                <PersonalDataItem>
                    <template #title>title</template>
                    <template #info>info</template>
                </PersonalDataItem>
            </div>
            <div class="center"></div>
            <div class="right"></div>
        </section>
</template>

<script setup lang="ts" name="home">
import Header from '@/components/header/header.vue';
import PersonalDataItem from './components/personal-data-item/personal-data-item.vue';

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
.personalData{
    border: 1px solid red;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        width: 30%;
        height: 100vh;
        border: 1px solid green;
    }
}


</style>