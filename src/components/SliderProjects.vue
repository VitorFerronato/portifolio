<template>
  <div class="slider-projects">
    <div v-for="(project, index) in projects" :key="index" class="project">
      <img :src="project.image" alt="" />
      <p class="project-title">{{ project.title }}</p>
      <p class="project-description">{{ project.description }}</p>
      <div class="icon-skillset">
        <Icon
          v-for="(icon, index) in project.icons"
          :key="index"
          :icon="icon"
          width="40"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          image: "../../css/img/easyBills/capa.png",
          title: "Easy Bills",
          description:
            "Easy Bills is a responsive web application built with Vue.js 3, Firebase, and Vue animations, designed to simplify your invoicing and expense tracking needs. With Easy Bill, you can effortlessly manage your bills and expenses in a reactive and user-friendly environment",
          icons: ["skill-icons:vuejs-dark", "vscode-icons:file-type-firebase"],
        },
        {
          image: "../../css/img/nuxt-finances.png",
          title: "My Finances",
          description:
            "Finances is a project designed to help you manage your personal finances. On the home screen, you will find an interactive graph that presents an overview of your spending and expenses. Additionally, you can add your transactions, keeping an up-to-date record of your finances",
          icons: [
            "skill-icons:nuxtjs-dark",
            "skill-icons:vuejs-dark",
            "skill-icons:tailwindcss-dark",
          ],
        },
        {
          image: "../../css/img/nuxt-authentication.png",
          title: "Nuxt Authentication",
          description:
            "Nuxt authentication is a project that allows users to be created and logged into the application. Each user can have specific authorizations to access different pages of the application, ensuring strict control of permissions and security",
          icons: [
            "skill-icons:nuxtjs-dark",
            "skill-icons:typescript",
            "skill-icons:tailwindcss-dark",
            "vscode-icons:file-type-firebase",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.slider-projects {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
}

.project {
  width: 33%;
  height: 450px;
  border: 1px solid $primary-color;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  img {
    width: 100%;
    height: 65%;
    object-fit: cover;
    border-radius: 5px;
  }

  .project-title {
    font-size: 24px;
    font-weight: 600;
    color: $white-color;
    margin-top: 12px;
  }

  .project-description {
    font-size: 14px;
    color: $white-light-color;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limita para no máximo 2 linhas */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .icon-skillset {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
}
</style>
