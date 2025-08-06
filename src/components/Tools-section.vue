<template>
  <h2 id="tools">WEB TOOLS</h2>
  <table>
    <thead>
      <tr>
        <th>NAME</th>
        <th>YEAR</th>
        <th>TYPE</th>
        <th>DESCRIPTION</th>
      </tr>
    </thead>
    <tbody>
      <Tools
        v-for="tool in tools"
        :key="tool.name"
        :tool="tool"
        :is-expanded="clickedRow === tool.name"
        @toggle-expand="handleToggleExpand"
      />
    </tbody>
  </table>
</template>

<script>
  import Tools from './Tools.vue';
  import toolData from '@/data/tools.js';

  export default {
    name: 'ToolsSection',
    components: {
      Tools,
    },
    data() {
      return {
        tools: toolData,
        clickedRow: null,
      };
    },
    mounted() {
      // Check if the current route has a tool slug
      if (this.$route.params.toolSlug) {
        const toolSlug = this.$route.params.toolSlug;
        const matchingTool = this.tools.find(
          (tool) => this.getToolSlug(tool.name) === toolSlug
        );

        if (matchingTool) {
          this.clickedRow = matchingTool.name;

          // Wait for DOM update before scrolling
          this.$nextTick(() => {
            this.scrollToTool();
          });
        }
      }
    },
    methods: {
      getToolSlug(toolName) {
        // Remove HTML tags and convert to slug
        const cleanName = toolName.replace(/<[^>]*>/g, '');
        return cleanName
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '');
      },

      handleToggleExpand(toolName) {
        const wasExpanded = this.clickedRow === toolName;
        this.clickedRow = wasExpanded ? null : toolName;

        // Update URL
        if (this.clickedRow) {
          const toolSlug = this.getToolSlug(toolName);
          this.$router.push(`/tools/${toolSlug}`);

          // Auto-scroll to position clicked row under navbar after DOM update
          this.$nextTick(() => {
            setTimeout(() => {
              // Find the clicked tool row
              const toolRows = document.querySelectorAll('.project-row');
              let clickedRow = null;

              toolRows.forEach((row) => {
                const toolNameElement = row.children[0];
                const toolNameText =
                  toolNameElement.textContent || toolNameElement.innerText;
                const cleanToolName = this.clickedRow.replace(/<[^>]*>/g, '');
                if (toolNameText === cleanToolName) {
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

      scrollToTool() {
        if (this.clickedRow) {
          // Find the clicked tool row
          const toolRows = document.querySelectorAll('.project-row');
          let clickedRow = null;

          toolRows.forEach((row) => {
            const toolNameElement = row.children[0];
            const toolNameText =
              toolNameElement.textContent || toolNameElement.innerText;
            const cleanToolName = this.clickedRow.replace(/<[^>]*>/g, '');
            if (toolNameText === cleanToolName) {
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
