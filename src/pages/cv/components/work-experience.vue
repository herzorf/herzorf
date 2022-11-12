<template>
  <div class="wrapper">
    <h3>
      <slot name="companyName"></slot>
    </h3>
    <h4>
      <slot name="job"></slot>
    </h4>
    <p>
      <slot name="time"></slot>
    </p>
    <div>
      <slot name="info"></slot>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.wrapper {
   margin-top: 22px;

   h3 {
      margin-bottom: 16px;
   }

   h4 {
      margin-bottom: 8px;
   }

   div {
      margin-top: 12px;
      margin-left: 28px;
   }
}
</style>
