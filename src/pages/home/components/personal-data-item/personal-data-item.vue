<template>
    <div class="itemWrapper">
        <div>
            <slot name="title"></slot>
        </div>
        <div class="info">
            <slot name="info"></slot>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    
}
</script>
<style lang="scss">
    .itemWrapper{
        border: 1px solid black;
        
    }
</style>