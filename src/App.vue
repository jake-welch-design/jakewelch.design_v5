<template>
  <div class="app-container">
    <div class="navbar-container">
      <Navbar />
    </div>
    <div class="content-container">
      <ProjectsSection />
      <ToolsSection />
      <AboutSection />
    </div>
    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import ProjectsSection from './components/Projects-section.vue';
  import ToolsSection from './components/Tools-section.vue';
  import AboutSection from './components/About-section.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Navbar,
      ProjectsSection,
      ToolsSection,
      AboutSection,
      Footer,
    },
  };
</script>

<style scoped>
  .navbar-container {
    position: sticky;
    top: 0;
    padding: 0;
    top: 0;
    width: 100%;
    z-index: 1000; /* Ensure the navbar is above other content */
  }

  /* .content-container {
} */

  .footer-container {
    position: sticky;
    z-index: 1000;
    bottom: 0;
    width: 100%;
  }
</style>
