<template>
  <div class="itemWrapper">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="info">
      <slot name="info"></slot>
    </div>
  </div>
</template>
<script lang="ts">
  export default {};
</script>
<style lang="scss">
  .itemWrapper {
    .title {
      font-size: 14px;
      color: #999;
    }
    .info {
      font-size: 24px;
      margin: 18px 0;
      @media (max-width: 576px) {
        font-size: 18px;
      }
    }
  }
</style>
