<template>
  <div>
    <div class="project-detail" v-if="project">
      <h1>{{ project.name }}</h1>
      <router-link to="/">
        <button class="back-button">Back to Main</button>
      </router-link>
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
    name: 'WhereThePiecesCameFrom',

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
  .project-detail {
    padding: 20px;
  }

  .back-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: var(--button-bg-color);
    color: var(--button-text-color);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: satoshiBold;
  }

  .back-button:hover {
    background-color: var(--button-hover-bg-color);
  }
</style>
