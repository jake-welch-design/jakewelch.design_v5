<template>
  <div>
    <div class="content-container">
      <ProjectsSection />
      <ToolsSection />
      <AboutSection />
    </div>
  </div>
</template>

<script>
  import ProjectsSection from '@/components/Projects-section.vue';
  import ToolsSection from '@/components/Tools-section.vue';
  import AboutSection from '@/components/About-section.vue';

  export default {
    name: 'Main',
    components: {
      ProjectsSection,
      ToolsSection,
      AboutSection,
    },
  };
</script>

<style scoped></style>
