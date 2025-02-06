<template>
  <div id="header">
    <img src="../assets/logo.png" alt="" />

    <div class="d-flex align-center gap-8">
      <router-link to="/" active-class="isActive">Home</router-link>
      <router-link to="/about" active-class="isActive">About</router-link>
      <router-link to="/skills" active-class="isActive">Skills</router-link>
      <router-link to="/projects" active-class="isActive">Projects</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  height: 10rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 9%;
    margin-left: 4.5rem;
  }

  p {
    color: $white-color;
    font-size: 20px;
    font-weight: 600;
  }

  div {
    margin-right: 6rem;
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
}

.isActive {
  color: $primary-color !important;
}
</style>
