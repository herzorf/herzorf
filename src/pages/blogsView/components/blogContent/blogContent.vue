<template>
  <div>{{ this.$route.params.id }}</div>
</template>
<script setup lang="ts">
  import { useRoute } from "vue-router";
  const yyy = useRoute();
  console.log(yyy.params);
</script>
<style lang="scss" scoped></style>
