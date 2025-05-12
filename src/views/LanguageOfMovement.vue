<template>
  <div>
    <div class="project-header">
      <h2>{{ project.name }}</h2>
      <router-link to="/">
        <button class="back-button">↳ Back</button>
      </router-link>
    </div>
    <div class="project-detail" v-if="project">
      <p v-html="project.details"></p>
      <ul v-if="project.images">
        <li v-for="(image, index) in project.images" :key="index">
          <img :src="image.src" :alt="image.alt" />
          <p>{{ image.caption }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Project not found.</p>
    </div>
  </div>
</template>

<script>
  import projectData from '@/data/projects.js';

  export default {
    name: 'LanguageOfMovement',

    data() {
      return {
        project: null,
      };
    },
    created() {
      // Find the project based on the route path
      const routePath = this.$route.path;
      this.project = projectData.find((p) => p.route === routePath);
    },
  };
</script>

<style scoped>
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw;
    margin-top: 1px;
    background-color: var(--h2-color-bg);
  }

  h2 {
    color: var(--h2-color-text);
    font-family: satoshiBold;
    font-size: 18px;
    text-align: left;
  }

  .project-detail {
    padding: 20px;
  }

  .back-button {
    border: none;
    cursor: pointer;
    color: var(--h2-color-text);
    background-color: var(--h2-color-bg);
    font-family: satoshiBold;
    font-size: 14px;
    text-decoration: underline;
  }

  .back-button:hover {
    color: black;
    background-color: var(--h2-color-text);
  }
</style>
