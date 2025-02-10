<template>
  <div id="header" :class="{ hide: isHidden, shadow: hasShadow }">
    <img src="../assets/logo.png" alt="" />

    <div class="d-flex align-center gap-8">
      <router-link to="/" active-class="isActive">Home</router-link>
      <router-link to="/about" active-class="isActive">About</router-link>
      <router-link to="/projects" active-class="isActive">Projects</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isHidden = ref(false);
const hasShadow = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  isHidden.value = currentScrollY > lastScrollY && currentScrollY > 50;

  hasShadow.value = currentScrollY > 50;

  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  height: 10rem;
  width: 100%;
  z-index: 10000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;

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

.hide {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.shadow {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}
</style>
