<template>
  <h2 id="projects">PROJECTS</h2>
  <table>
    <thead>
      <tr>
        <th>NAME</th>
        <th>DATE</th>
        <th>TYPE</th>
        <th>METHODS</th>
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
    methods: {
      handleToggleExpand(projectName) {
        this.clickedRow = this.clickedRow === projectName ? null : projectName;
      },
    },
  };
</script>

<style scoped>
  h2 {
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
    width: calc(100% + 2px);
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
