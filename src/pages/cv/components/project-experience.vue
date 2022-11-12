<template >
    <div>
        <div class="name">
           <span><slot name="projectName"></slot></span> 
            <slot name="link"></slot>
        </div>
        <div class="info">
            <slot name="info"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
div {
    margin-bottom: 1em;
    margin-top: 1em;

    .name {
        display: flex;
        justify-content: space-between;

        span {
            font-size: 24px;
            color: rgb(113, 113, 113);
        }
    }
}
</style>