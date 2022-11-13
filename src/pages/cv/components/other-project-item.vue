<template>
    <div>
        <span><slot name="name"></slot></span>
        <span><slot name="info"></slot></span>
        <span><slot name="link"></slot></span>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
div {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;

    span:first-child {
        color: rgb(113, 113, 113);
    }
}
</style>