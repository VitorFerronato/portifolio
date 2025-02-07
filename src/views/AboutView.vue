<template>
  <section id="about" class="text-center">
    <h1 class="title ma-0">About <span class="color-destaq">me</span></h1>
    <p class="ma-0 subtitle">Professional trajectory</p>
    <p class="ma-0 about-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum
      delectus repellendus eligendi? Voluptas qui obcaecati voluptatem. Laborum
      quidem suscipit corporis! Atque mollitia sint animi amet! Modi facere
      tempore doloremque.
    </p>
    <p class="ma-0 about-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum
      delectus repellendus eligendi? Voluptas qui obcaecati voluptatem. Laborum
      quidem suscipit corporis! Atque mollitia sint animi amet! Modi facere
      tempore doloremque.
    </p>
    <div class="d-flex justify-center mt-6">
      <Button title="Resume" icon="material-symbols-light:download-rounded">
      </Button>
    </div>
  </section>
</template>

<script setup>
import Button from "../components/Button.vue";
</script>

<style lang="scss" scoped>
#about {
  padding: 4rem 6rem 0 6rem;

  .about-description {
    color: $white-color;
    margin-bottom: 0.5rem;
  }
}
</style>
