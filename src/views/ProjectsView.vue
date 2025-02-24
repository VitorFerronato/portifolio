<template>
  <section id="projects">
    <div>
      <h1 class="title text-center ma-0">
        My <span class="color-destaq">Projects</span>
        <p class="ma-0 subtitle">What I'm working with</p>
      </h1>

      <div class="swiper">
        <div class="swiper-iten"></div>
        <div class="swiper-iten"></div>
        <div class="swiper-iten"></div>
      </div>

      <div class="d-flex justify-center">
        <Button title="All projects" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "../components/Button.vue";
</script>

<style lang="scss" scoped>
#projects {
  height: 100vh;
  background-color: $second-color;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper {
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    border: 1px solid blue;
    .swiper-iten {
      width: 25%;
      height: 300px;
      border: 1px solid red;
    }
  }
}
</style>
