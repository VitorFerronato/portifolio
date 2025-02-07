<template>
  <div>
    <Header />
    <HomeView />

    <div id="section-content">
      <AboutView />
      <ServicesView />
      <SkillsView />
      <Footter />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ServicesView from "./views/ServicesView.vue";
import SkillsView from "./views/SkillsView.vue";
import Footter from "./components/Footter.vue";
</script>

<style lang="scss" scoped>
#section-content {
  background-color: $dark-color;
}
</style>
