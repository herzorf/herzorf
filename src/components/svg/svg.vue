<template >
        <i :class="`iconfont icon-${props.class}`"></i>
</template>
<script setup lang="ts">
const props = defineProps({class:String})
</script>
<style lang="scss" scoped>
    
</style>