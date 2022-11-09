<template >
    <article>
        <aside>
            <div class="avatar">
                <img :src="avatar" alt="">
            </div>
        </aside>
        <main>主要内容</main>
    </article>
</template>
<script setup lang="ts">

import avatar from "@/assets/images/avatar.jpg"

</script>
<style lang="scss">
article {
    margin: 20px 0;
    display: flex;
    width: 21cm;
    overflow: hidden;
    min-height: 29.7cm;
    border: 1px solid blue;
    margin: 0 auto;
    padding: 1em;

    aside {
        border: 1px solid red;
        width: 30%;

    }

    main {
        border: 1px solid black;
        width: 70%;
    }
}
</style>