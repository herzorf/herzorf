<template>
    <header>
        <ul>
            <li>
                <router-link to="about">about</router-link>
            </li>
        </ul>
        <img :src="Logo" alt="">
        <Social />
    </header>
</template>     
<script lang="ts" setup>
import Social from './components/social/social.vue';
import Logo from "@/assets/logo.png"
</script>   
<style lang="scss" scoped>
header{
    border: 1px solid red;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img{
        width: 150px;
        height: 150px;
    }
}
</style>