<template>
  <section>
    <MainTitle>
      <slot name="title"></slot>
    </MainTitle>
    <ProjectItem>
        <slot name="projectName"></slot>
    </ProjectItem>
  </section>
</template>
<script setup lang="ts">
import MainTitle from "./main-title.vue";
import ProjectItem from "./project-item.vue";
</script>
<style lang="scss" scoped>

</style>
