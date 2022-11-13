<template>
  <article>
    <Side/>
    <main>
      <MySkill />
      <MyWorkExperience/>
      <MyProjectExperience/>
      <OtherProject/>
      <OtherLink/>
      <AboutMe/>
    </main>
  </article>
</template>
<script setup lang="ts">

import MyWorkExperience from "./components/my-work-experience.vue";
import MySkill from "./components/my-skill.vue";
import MyProjectExperience from "./components/my-project-experience.vue";
import OtherProject from "./components/other-project.vue";
import OtherLink from "./components/other-link.vue";
import AboutMe from "./components/about-me.vue";
import Side from "./components/side.vue";
</script>
<style lang="scss" scoped>
article {
    display: flex;
    width: 21cm;
    overflow: hidden;
    min-height: 29.7cm;
    margin: 0 auto;
    font-family: initial;
    padding: 0 1em;

    &:deep(a) {
        color: rgb(50, 168, 214);
    }

    main {
        margin: 20px;
        width: 70%;
    }
}
</style>
