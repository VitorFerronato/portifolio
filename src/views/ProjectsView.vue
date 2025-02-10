<template>
  <section id="projects">
    <h1 class="title text-center ma-0">
      My <span class="color-destaq">Projects</span>
      <p class="ma-0 subtitle">What I'm working with</p>
    </h1>

    <Swiper />

    <div class="d-flex justify-end">
      <Button title="All projects" class="all-button" />
    </div>

    <SkillsView />
  </section>
</template>

<script setup>
import Swiper from "../components/Swiper.vue";
import SkillsView from "./SkillsView.vue";
import Button from "../components/Button.vue";
</script>

<style lang="scss" scoped>
#projects {
  margin-top: 3rem;
  padding: 4rem 6rem 0 6rem;
  background-color: $second-color;

  .all-button {
    margin-top: 1rem;
  }
}
</style>
