<template>
        <Header />
        <section class="personalInfo">
            <h1>Herzorf</h1>
            <h1>一个web开发工程师</h1>
        </section>
        <section class="personalData" ref="personalData">
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
import { ref } from 'vue';
const personalData = ref(null)

const leftInfo = [
    {
        title:"姓名",
        info:"何中峰(Herzorf)",
    },
    {
        title:"人生目标",
        info:"身体自由，思想自由，财务自由",
    },
    {
        title:"目前具备的技能",
        info:"web开发",
    },
    {
        title:"以后将要具备的技能",
        info:"全栈开发",
    }
]
const rightInfo = [
    {
        title:"工作经验",
        info:"2022.8.1---至今",
    },
    {
        title:"年龄",
        info:"23",
    },
    {
        title:"邮箱",
        info:"1446450047@qq.com",
    },
    {
        title:"目前居住地",
        info:"上海",
    }
]

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
    >div{
        width: 20%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        &.left{
        }
        &.center{
            flex-grow: 1;
        }
    }
}


</style>