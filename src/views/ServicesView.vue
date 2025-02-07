<template>
  <div id="about-services">
    <h1 class="title text-center ma-0">
      What i <span class="color-destaq">do?</span>
      <p class="ma-0 subtitle">My services</p>
    </h1>

    <div class="services">
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    icon: "material-symbols-light:computer-outline",
    title: "Web  development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium soluta voluptates",
  },
  {
    icon: "material-symbols-light:mobile-friendly-outline",
    title: "Mobile development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium soluta voluptates",
  },

  {
    icon: "material-symbols-light:open-jam-outline-rounded",
    title: "Web Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium soluta voluptates",
  },
]);
</script>

<style lang="scss" scoped>
#about-services {
  margin-top: 4rem;

  .services {
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
}
</style>
