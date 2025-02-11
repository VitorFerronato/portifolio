<template>
  <div id="footer">
    <img src="../assets/logo.png" alt="" />

    <p class="ma-0">2025 all rights reserved &reg;</p>

    <SocialIcons />
  </div>
</template>

<script setup>
import SocialIcons from "../components/SocialIcons.vue";
</script>

<style lang="scss" scoped>
#footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $dark-color;
  height: 200px;
  color: $white-color;

  p {
    align-self: flex-end;
    color: $white-light-color;
    font-size: 12px;
    padding-bottom: 4px;
  }

  img {
    width: 9%;
    margin-left: 4.5rem;
  }

  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  router-link,
  a {
    color: $white-color;
    font-size: 20px;
    font-weight: 600;
    transition: 0.3s;
    cursor: pointer;
  }
  router-link:hover,
  a:hover {
    color: $primary-color !important;
  }
}
</style>
