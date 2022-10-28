<template>
    <header>
        <ul>
            <li>
                <router-link to="about">about</router-link>
            </li>
        </ul>
        <router-link to="/"><img :src="Logo" alt="logo" /></router-link>
        <Social />
    </header>
</template>     
<script lang="ts" setup>
import Social from './components/social/social.vue';
import Logo from "@/assets/images/logo.png"
</script>   
<style lang="scss" scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 150px;
        height: 150px;
    }
}
</style>