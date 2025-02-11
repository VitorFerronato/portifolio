<template>
  <section id="about" class="text-center">
    <ServicesView />
    <SkillsView />
  </section>
</template>

<script setup>
import ServicesView from "./ServicesView.vue";

import SkillsView from "./SkillsView.vue";
</script>

<style lang="scss" scoped>
#about {
  .about-description {
    color: $white-color;
    margin-bottom: 0.5rem;
  }
}
</style>
