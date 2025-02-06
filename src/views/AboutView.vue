<template>
  <section id="about">
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

    <h1 class="title text-center ma-0 mt-7">
      What i <span class="color-destaq">do?</span>
      <p class="ma-0 subtitle">My services</p>
    </h1>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
#about {
  background-color: $dark-color;
  padding: 2rem 6rem;
  .title {
    color: $white-color;

    font-size: 2rem !important;
    font-weight: 300 !important;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1rem !important;
    font-weight: 400 !important;
    margin-bottom: 1.5rem;
    color: $white-light-color;
  }

  .about-description {
    color: $white-color;
    width: 70%;
    margin-bottom: 0.5rem;
  }
}
</style>
