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
  import { watchNameColumnWidth } from '@/utils/nameColumnWidth.js';

  export default {
    name: 'Main',
    components: {
      ProjectsSection,
      ToolsSection,
      AboutSection,
    },
    mounted() {
      // Sizes the NAME column of both tables to the longest name in either.
      this.stopNameColumnWidth = watchNameColumnWidth();
    },
    unmounted() {
      this.stopNameColumnWidth?.();
    },
  };
</script>

<style scoped></style>
