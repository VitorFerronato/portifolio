<template>
  <section id="services">
    <div>
      <h1 class="title text-center ma-0">
        What i <span class="color-destaq">do?</span>
        <p class="ma-0 subtitle">My services</p>
      </h1>
      <div class="services-box">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card"
        >
          <div class="text-center">
            <Icon :icon="service.icon" width="100" color="#00ca9d" />
            <p class="ma-0 card-title">{{ service.title }}</p>
            <p class="ma-0 card-subtitle">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="d-flex justify-center all-button">
        <Button title="See my work!" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";

const services = ref([
  {
    icon: "material-symbols-light:computer-outline",
    title: "Web  development",
    description:
      "I create modern, fast, and responsive websites focused on delivering the best user experience and customized solutions for blogs, PWA's. landing pages, and full web systems.",
  },
  {
    icon: "material-symbols-light:mobile-friendly-outline",
    title: "Mobile development",
    description:
      "I build high-performance native and hybrid mobile applications. I deliver smooth and efficient solutions tailored to your project’s needs, whether it’s a simple app or a robust platform.",
  },

  {
    icon: "material-symbols-light:open-jam-outline-rounded",
    title: "Web Designer",
    description:
      "I design intuitive and visually appealing interfaces, blending aesthetics with functionality. With UX/UI expertise, I create seamless experiences using tools like Figma and Adobe XD.  ",
  },
]);
</script>

<style lang="scss" scoped>
#services {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .services-box {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .service-card {
      border-radius: 10px;
      width: 25%;
      background-color: $second-color;

      padding: 4rem 1rem;

      .card-title {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 1rem 0;
        color: $white-color;
      }

      .card-subtitle {
        font-size: 1rem !important;
        font-weight: 400 !important;
        color: $white-light-color;
      }
    }
  }

  .all-button {
    margin-top: 2rem;
  }
}
</style>
