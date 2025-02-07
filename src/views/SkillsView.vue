<template>
  <div id="skills">
    <h1 class="title text-center ma-0">
      My <span class="color-destaq">Skills</span>
      <p class="ma-0 subtitle">My services</p>
    </h1>

    <div class="skills-main">
      <div v-for="(skill, index) in skills" :key="index" class="skills-box">
        <p>{{ skill.title }}</p>

        <div class="skill-icon d-flex align-center gap-2">
          <div
            v-for="(sk, index) in skill.skillSet"
            :key="index"
            class="d-flex align-center gap-2"
          >
            <Icon :icon="sk.icon" width="50" />
            <span>{{ sk.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const skills = ref([
  {
    title: "Front-end",
    skillSet: [
      {
        name: "VueJS",
        icon: "skill-icons:vuejs-dark",
      },
      {
        name: "Nuxt",
        icon: "skill-icons:nuxtjs-dark",
      },
      {
        name: "Angular",
        icon: "skill-icons:angular-dark",
      },
      {
        name: "Flutter",
        icon: "skill-icons:flutter-dark",
      },
      {
        name: "Typescript",
        icon: "skill-icons:typescript",
      },
      {
        name: "React",
        icon: "skill-icons:react-dark",
      },
      {
        name: "Vitest",
        icon: "skill-icons:vitest-dark",
      },
      {
        name: "Cypress",
        icon: "skill-icons:cypress-dark",
      },
      {
        name: "Tailwind",
        icon: "skill-icons:tailwindcss-dark",
      },
      {
        name: "Bootstrap",
        icon: "skill-icons:bootstrap",
      },
      {
        name: "SASS",
        icon: "skill-icons:sass",
      },
      {
        name: "CSS",
        icon: "skill-icons:css",
      },
      {
        name: "Javascript",
        icon: "skill-icons:javascript",
      },

      {
        name: "HTML",
        icon: "skill-icons:html",
      },
    ],
  },
  {
    title: "Backend",
    skillSet: [
      {
        name: "Python",
        icon: "skill-icons:python-dark",
      },
      {
        name: "Firebase",
        icon: "vscode-icons:file-type-firebase",
      },
      {
        name: "NodejS",
        icon: "skill-icons:nodejs-dark",
      },
      {
        name: "SQL",
        icon: "skill-icons:mysql-dark",
      },
      {
        name: "MongoDB",
        icon: "skill-icons:mongodb",
      },
    ],
  },
  {
    title: "Tools and design",
    skillSet: [
      {
        name: "Figma",
        icon: "skill-icons:figma-dark",
      },
      {
        name: "Storybook",
        icon: "devicon:storybook",
      },
      {
        name: "Azure",
        icon: "skill-icons:azure-dark",
      },
      {
        name: "GIT",
        icon: "skill-icons:git",
      },
      {
        name: "Jira",
        icon: "devicon:jira",
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
#skills {
  margin-top: 3rem;
  padding: 4rem 6rem 0 6rem;
  background-color: $second-color;

  .skills-main {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 2rem;

    .skills-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-grow: 1;
      width: 25%;
      height: 100%;

      p {
        font-size: 20px;
        color: $white-color;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 0.012px solid $primary-color;
      }

      .skill-icon {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.5rem;
      }

      span {
        color: $white-color;
      }
    }
  }
}
</style>
