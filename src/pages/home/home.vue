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
                    <template #title>人生目标</template>
                    <template #info>身体自由，思想自由，财务自由</template>
                </PersonalDataItem>
                <PersonalDataItem>
                    <template #title>目前具备的技能</template>
                    <template #info>info</template>
                </PersonalDataItem> 
                <PersonalDataItem>
                    <template #title>以后将要具备的技能</template>
                    <template #info>info</template>
                </PersonalDataItem>
            </div>
            <div class="center"></div>
            <div class="right">
                <PersonalDataItem>
                    <template #title>工作经验</template>
                    <template #info>2022.8.1---至今</template>
                </PersonalDataItem>
                <PersonalDataItem>
                    <template #title>年龄</template>
                    <template #info>23</template>
                </PersonalDataItem> 
                <PersonalDataItem>
                    <template #title>邮箱</template>
                    <template #info>1446450047@qq.com</template>
                </PersonalDataItem>
                <PersonalDataItem>
                    <template #title>所写的博客数量</template>
                    <template #info>35</template>
                </PersonalDataItem>
            </div>
        </section>
</template>

<script setup lang="ts" name="home">
import Header from '@/components/header/header.vue';
import PersonalDataItem from './components/personal-data-item/personal-data-item.vue';

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
        width: 30%;
        height: 100vh;
        border: 1px solid green;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        &.left{
        }
    }
}


</style>