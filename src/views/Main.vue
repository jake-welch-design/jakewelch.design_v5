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
  import { watchColumnWidths } from '@/utils/columnWidths.js';

  export default {
    name: 'Main',
    components: {
      ProjectsSection,
      ToolsSection,
      AboutSection,
    },
    mounted() {
      // Sizes the NAME and YEAR columns of both tables to the widest value in
      // either, so the two tables line up.
      this.stopColumnWidths = watchColumnWidths();
    },
    unmounted() {
      this.stopColumnWidths?.();
    },
  };
</script>

<style scoped></style>
