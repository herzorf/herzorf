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
        <section class="advantage" ref="advantage">
            <h1>My Advantage</h1>
            <div class="advantageContent">
                <div class="advantageItem" v-for="item in advantageItem">
                    <div class="icon">
                        <Svg :class="item.class"></Svg>
                        <span>{{item.percent}}</span>
                    </div>
                    <span>{{item.name}}</span>
                </div>
            </div>   
        </section>
        <section style="height: 100vh;"></section>
</template>

<script setup lang="ts" name="home">
import Header from '@/components/header/header.vue';
import PersonalDataItem from './components/personal-data-item/personal-data-item.vue';
import avatar from "@/assets/images/avatar.jpg"
import {leftInfo,oberveApper,rightInfo,advantageItem} from "./util"
import { onMounted, ref } from 'vue';
import Svg from '../../components/svg/svg.vue';
const personalData = ref<HTMLElement>()
const advantage = ref<HTMLElement>()
onMounted(()=>{
    oberveApper(personalData.value!)
    oberveApper(advantage.value!)
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
    transition: 2.5s;
    border-bottom: 1px solid black;
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
.advantage{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    opacity: 0;
    transition: 2.5s;
    border-bottom: 1px solid black;
    &.appear{
        opacity: 1;
    }
    h1{
        font-size: 48px;
        font-weight: lighter;
    }
    .advantageContent{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: gray;
        fill: grey;
        .advantageItem{
            padding: 16px 0;
            font-size: 50px;
            width: 10%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            .icon{
                font-size: 80px;
                display: flex;
                flex-direction: column;
                span{
                    margin: 12px 0;
                    font-size: 30px;
                    text-align: center;
                }
            }
            span{
                font-size: 20px
            }
        }
    }
}


</style>