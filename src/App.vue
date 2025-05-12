<template>
  <div class="app-container">
    <div class="navbar-container">
      <Navbar />
    </div>
    <div class="content-container">
      <router-view />
    </div>
    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer,
    },
  };
</script>

<style scoped>
  .navbar-container {
    position: sticky;
    top: 0;
    padding: 0;
    width: 100%;
    z-index: 1000;
  }

  .footer-container {
    position: sticky;
    z-index: 1000;
    bottom: 0;
    width: 100%;
  }
</style>
