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
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;

  img {
    width: 9%;
  }

  p {
    color: $white-color;
    font-size: 20px;
    font-weight: 600;
  }

  div {
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
