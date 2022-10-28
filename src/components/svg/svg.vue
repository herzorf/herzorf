<template >
       <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${props.class}`"></use>
</svg>
</template>
<script setup lang="ts">
const props = defineProps({class:String})
</script>
<style lang="scss" scoped>
    
</style>