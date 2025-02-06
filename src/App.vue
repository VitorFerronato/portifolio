<template>
  <div>
    <Header />

    <HomeView />
    <AboutView />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
</script>
