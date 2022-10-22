<template>
    <header>
        <ul>
            <li>
                <router-link to="about">about</router-link>
            </li>
        </ul>
        <div class="logo">logo</div>
        <Social />
    </header>
</template>     
<script lang="ts" setup>
import Social from './components/social/social.vue';

</script>   
<style lang="scss" scoped>
header{
    border: 1px solid red;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>