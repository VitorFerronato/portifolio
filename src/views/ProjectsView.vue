<template>
  <section id="projects">
    <div class="main-box">
      <h1 class="title text-center ma-0">
        My <span class="color-destaq">Projects</span>
        <p class="ma-0 subtitle">What I'm working with</p>
      </h1>

      <SliderProjects />

      <div class="d-flex justify-center">
        <Button title="All projects" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "../components/Button.vue";
import SliderProjects from "../components/SliderProjects.vue";
</script>

<style lang="scss" scoped>
#projects {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $second-color;
  padding: 0rem 6rem;

  .main-box {
    width: 100%;
  }
}
</style>
