<template>
  <div id="header" :class="{ hide: isHidden, shadow: hasShadow }">
    <img src="../assets/logo.png" alt="" />

    <div class="d-flex align-center gap-8">
      <router-link
        to="/#home"
        :class="{ isActive: activeSection === 'home' }"
        @click.prevent="setActiveSection('home')"
      >
        Home
      </router-link>
      <router-link
        to="/#services"
        :class="{ isActive: activeSection === 'services' }"
        @click.prevent="setActiveSection('services')"
      >
        Services
      </router-link>
      <router-link
        to="/#projects"
        :class="{ isActive: activeSection === 'projects' }"
        @click.prevent="setActiveSection('projects')"
      >
        Projects
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isHidden = ref(false);
const hasShadow = ref(false);
const activeSection = ref("");
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  isHidden.value = currentScrollY > lastScrollY && currentScrollY > 50;

  hasShadow.value = currentScrollY > 50;

  lastScrollY = currentScrollY;

  detectActiveSection();
};

const detectActiveSection = () => {
  const sections = ["home", "about", "projects"];
  let currentSection = "";

  sections.forEach((section) => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = section;
      }
    }
  });

  activeSection.value = currentSection;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  detectActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const setActiveSection = (section) => {
  activeSection.value = section;
};
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
    width: 7%;
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
