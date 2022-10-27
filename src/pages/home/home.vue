<template>
        <Header />
        <section class="personalInfo">
            <h1>Herzorf</h1>
            <h1>一个web开发工程师</h1>
        </section>
        <section class="personalData" ref="personalData" >
            <div class="left">
                <PersonalDataItem v-for="item in leftInfo">
                    <template #title>{{item.title}}</template>
                    <template #info>{{item.info}}</template>
                </PersonalDataItem>
            </div>
            <div class="center">
                <img :src="avatar" width="160" alt="自拍">
            </div>
            <div class="right">
                <PersonalDataItem v-for="item in rightInfo">
                    <template #title>{{item.title}}</template>
                    <template #info>{{item.info}}</template>
                </PersonalDataItem>
            </div>
        </section>
</template>

<script setup lang="ts" name="home">
import Header from '@/components/header/header.vue';
import PersonalDataItem from './components/personal-data-item/personal-data-item.vue';
import avatar from "@/assets/avatar.jpg"
import {leftInfo,oberveApper,rightInfo} from "./util"
import { onMounted, ref } from 'vue';
const personalData = ref<HTMLElement>()
onMounted(()=>{
    oberveApper(personalData.value!)
})
</script>
<style scoped lang="scss">

.personalInfo{
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
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0;
    transition: 2s;
    &.appear{
        opacity: 1;
    }
    >div{
        width: 20%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        &.center{
            flex-grow: 1;
        }
    }
}


</style>