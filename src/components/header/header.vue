<template>
    <header>
        <ul>
            <li>
                <router-link to="about">About</router-link>
            </li>
            <li>
                <router-link to="blog">Blog</router-link>
            </li>
        </ul>
        <router-link to="/"><img :src="Logo" alt="logo" /></router-link>
        <Social />
    </header>
</template>     
<script lang="ts" setup>
import Social from './components/social/social.vue';
import Logo from "@/assets/images/logo.png"
import { useCounterStore } from '@/globalStore/globalStore';
const sideMuneVisible = useCounterStore()

</script>   
<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        display: flex;
        flex-grow: 0.3;
        justify-content: space-around;

        li {
            &:hover {
                border-bottom: 1px solid black;
            }
        }
    }

    a {
        color: black;
    }

    img {
        width: 150px;
        height: 150px;
    }
}
</style>