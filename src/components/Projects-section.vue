<template>
  <h2 id="projects">PROJECTS</h2>
  <table>
    <thead>
      <tr>
        <th>NAME</th>
        <th>YEAR</th>
        <th>TYPE</th>
        <!-- <th>METHODS</th> -->
        <th>DESCRIPTION</th>
      </tr>
    </thead>
    <tbody>
      <Project
        v-for="project in projects"
        :key="project.name"
        :project="project"
        :expandedProject="clickedRow"
        @update:expandedProject="handleToggleExpand"
      />
    </tbody>
  </table>
</template>

<script>
  import Project from './Project.vue';
  import projectData from '@/data/projects.js';

  export default {
    name: 'ProjectsSection',
    components: {
      Project,
    },
    data() {
      return {
        projects: projectData,
        clickedRow: null,
      };
    },
    mounted() {
      // Check if there's a project slug in the URL
      const projectSlug = this.$route.params.projectSlug;
      if (projectSlug) {
        // Find project by slug and expand it
        const project = this.projects.find(
          (p) => this.getProjectSlug(p.name) === projectSlug
        );
        if (project) {
          this.clickedRow = project.name;
          // Scroll to position clicked row under navbar after expansion
          this.$nextTick(() => {
            setTimeout(() => {
              // Find the clicked project row
              const projectRows = document.querySelectorAll('.project-row');
              let clickedRow = null;

              projectRows.forEach((row) => {
                const projectName = row.children[0].textContent;
                if (projectName === project.name) {
                  clickedRow = row;
                }
              });

              if (clickedRow) {
                const navbar = document.querySelector('.navbar-container');
                const navbarHeight = navbar?.offsetHeight || 0;

                const rowTop =
                  clickedRow.getBoundingClientRect().top + window.scrollY;
                const offset = 10; // Small offset from navbar

                window.scrollTo({
                  top: rowTop - navbarHeight - offset,
                  behavior: 'smooth',
                });
              }
            }, 200); // Longer delay for initial load
          });
        }
      }
    },
    watch: {
      '$route.params.projectSlug'(newSlug) {
        if (newSlug) {
          const project = this.projects.find(
            (p) => this.getProjectSlug(p.name) === newSlug
          );
          if (project) {
            this.clickedRow = project.name;
          }
        } else {
          this.clickedRow = null;
        }
      },
    },
    methods: {
      getProjectSlug(projectName) {
        return projectName
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
          .replace(/\s+/g, '-') // Replace spaces with dashes
          .replace(/-+/g, '-') // Replace multiple dashes with single dash
          .trim();
      },
      handleToggleExpand(projectName) {
        const newExpandedProject =
          this.clickedRow === projectName ? null : projectName;
        this.clickedRow = newExpandedProject;

        // Update URL
        if (newExpandedProject) {
          const slug = this.getProjectSlug(newExpandedProject);
          this.$router.push(`/${slug}`);

          // Auto-scroll to position clicked row under navbar after DOM update
          this.$nextTick(() => {
            setTimeout(() => {
              // Find the clicked project row
              const projectRows = document.querySelectorAll('.project-row');
              let clickedRow = null;

              projectRows.forEach((row) => {
                const projectName = row.children[0].textContent;
                if (projectName === newExpandedProject) {
                  clickedRow = row;
                }
              });

              if (clickedRow) {
                const navbar = document.querySelector('.navbar-container');
                const navbarHeight = navbar?.offsetHeight || 0;

                const rowTop =
                  clickedRow.getBoundingClientRect().top + window.scrollY;
                const offset = 10; // Small offset from navbar

                window.scrollTo({
                  top: rowTop - navbarHeight - offset,
                  behavior: 'smooth',
                });
              }
            }, 150); // Slightly longer delay to ensure expansion is complete
          });
        } else {
          this.$router.push('/');
        }
      },
    },
  };
</script>

<style scoped>
  h2 {
    width: calc(50% - 1px);
    padding: 1vw;
    margin-top: 1px;
    background-color: var(--h2-color-bg);
    color: var(--h2-color-text);
    font-family: satoshiBold;
    font-size: 18px;
    text-align: left;
  }

  table {
    background-color: var(--table-color-bg);
    color: var(--table-color-text);
    /* width: calc(100% + 2px); */
    width: 50%;
    border-collapse: collapse;
    margin: -1px;
    table-layout: fixed;
  }

  th {
    text-align: left;
    font-family: satoshiBold;
    font-size: 16px;
    padding: 0.5vw;
    padding-left: 1vw;
  }

  th:last-child,
  td:last-child {
    width: 50%;
  }

  tr:not(.exclude):not(:has(th)):hover
    td:not(:first-child):not(:last-child):not(.expandable-row),
  tr:not(.exclude):not(:has(th)):hover td:first-child:not(.expandable-row),
  .clicked-row td:not(:first-child):not(:last-child),
  .clicked-row td:first-child {
    border-right-color: var(--body-color);
  }

  tr:not(.exclude):not(:has(th)):hover td:nth-child(2):not(.expandable-row),
  .clicked-row td:nth-child(2) {
    border-left-color: var(--border-color);
  }

  tr:not(.exclude):not(.expandable-row):hover td {
    border-bottom-color: var(--border-color-2);
  }

  tr:not(.exclude):not(:has(th)):hover:not(.expandable-row),
  .clicked-row {
    background-color: var(--hover-color-bg);
    color: var(--hover-color-text);
    cursor: pointer;
  }

  tr.expanded {
    padding-bottom: 50px;
  }

  td {
    font-family: satoshiRegular;
    font-size: 14px;
    padding: 0.5vw;
    padding-left: 1vw;
  }

  .expandable-row:hover td {
    border: 1px solid var(--border-color);
    border-right: none;
  }

  td,
  th {
    border: 1px solid var(--border-color);
  }

  .expandable-row > td {
    padding: 0;
    margin: 0;
  }

  .expandable-row {
    max-height: 600px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .expandable-row td {
    vertical-align: top;
  }

  .expanded-content {
    padding: 20px;
    max-height: 67vh;
    overflow: -moz-scrollbars-vertical;
    overflow-y: scroll;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .project-row:hover,
  .clicked-row {
    background-color: var(--hover-color-bg);
    color: var(--hover-color-text);
  }

  .project-row:hover a,
  .clicked-row a {
    background-color: var(--hover-color-bg);
    color: var(--hover-color-text);
  }

  @media (max-width: 600px) {
    .expanded-content {
      max-height: 400px;
      grid-template-columns: 1fr;
    }

    h2 {
      font-size: 14px;
    }

    td,
    th,
    .project-text,
    .caption {
      font-size: 10px;
    }

    th,
    td {
      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;
      hyphens: auto;
    }
  }
</style>
