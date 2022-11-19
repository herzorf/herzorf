<template>
  <div class="wrapper">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
  .wrapper {
    cursor: pointer;
    display: none;
    @media (max-width: 576px) {
      & {
        display: block;
      }
    }
    .item {
      border: 2px solid black;
      margin-bottom: 6px;
      width: 30px;
    }
  }
</style>
