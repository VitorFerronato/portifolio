<template>
  <div>
    <Header />
    <HomeView id="home" />

    <div id="section-content">
      <AboutView id="services" />
      <ProjectsView id="projects" />
      <Footter />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import Footter from "./components/Footter.vue";
import ProjectsView from "./views/ProjectsView.vue";
</script>

<style lang="scss" scoped>
#section-content {
  background-color: $dark-color;
}
</style>
