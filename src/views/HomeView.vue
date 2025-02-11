<template>
  <section id="home">
    <div class="about-me">
      <div>
        <h1 class="hello ma-0">
          Hello World, <span class="color-destaq">I'm</span>
        </h1>
        <h1 class="name ma-0">Vitor Ferronato</h1>
        <p class="subtitle ma-0">Front end developer</p>
        <p class="description ma-0">
          Heey, I am a front-end developer with 5 years of experience,
          specialized in Vue.js and its ecosystem. I focus on creating modern,
          intuitive, and high-performance interfaces, combining high-quality
          UI/UX with agile and intelligent solutions to enhance user experience.
        </p>

        <router-link to="/#about"><Button title="Got curious?" /></router-link>
      </div>
    </div>

    <div class="profile-picture">
      <div class="picture"></div>
    </div>
  </section>
</template>

<script setup>
import Button from "../components/Button.vue";
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;

  display: flex;
  align-items: center;

  .about-me {
    width: 50%;
    margin-left: 6rem;
    color: $white-color;

    .hello {
      font-size: 1.5rem !important;
      font-weight: 300 !important;
      margin-bottom: 0.5rem;
    }

    .name {
      font-size: 3rem;
      font-weight: 500 !important;
      margin-bottom: 0.5rem;
      color: $primary-color;
    }

    .subtitle {
      font-size: 1.5rem !important;
      font-weight: 300 !important;
      margin-bottom: 1.5rem;
    }

    .description {
      color: $white-light-color;
      margin-bottom: 3rem;
    }

    .social-icons {
      margin-top: 4rem;
    }
  }

  .profile-picture {
    width: 50%;
    display: flex;
    justify-content: center;

    .picture {
      width: 500px;
      height: 500px;
      background-color: $primary-color;
      box-shadow: 0 0 10px rgba(23, 198, 148, 0.8);

      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }
  }
}
</style>
