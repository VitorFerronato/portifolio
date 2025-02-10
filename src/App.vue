<template>
  <div>
    <Header />
    <HomeView />

    <div id="section-content">
      <AboutView />
      <ServicesView />
      <ProjectsView />
      <Footter />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ServicesView from "./views/ServicesView.vue";
import Footter from "./components/Footter.vue";
import ProjectsView from "./views/ProjectsView.vue";
</script>

<style lang="scss" scoped>
#section-content {
  background-color: $dark-color;
}
</style>
