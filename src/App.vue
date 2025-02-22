<template>
  <div>
    <Header />

    <HomeView id="home" />

    <div class="section-content">
      <!--Services-->
      <ServicesView />

      <!-- Projects -->
      <ProjectsView />

      <!--Skills-->
      <SkillsView />

      <Footter />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import HomeView from "./views/HomeView.vue";
import Footter from "./components/Footter.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ServicesView from "./views/ServicesView.vue";
import SkillsView from "./views/SkillsView.vue";
</script>

<style lang="scss" scoped>
.section-content {
  background-color: $dark-color;
}
</style>
