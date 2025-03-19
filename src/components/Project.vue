<template>
  <tr
    :class="{ 'project-row': true, 'clicked-row': isExpanded }"
    @click="handleRowClick"
  >
    <td>{{ project.name }}</td>
    <td>{{ project.date }}</td>
    <td>{{ project.type }}</td>
    <td>{{ project.technologies }}</td>
    <td>{{ project.description }}</td>
  </tr>

  <tr class="expandable-row" v-if="isExpanded" ref="expandableRow">
    <td colspan="5">
      <div class="expanded-content">
        <!-- First element (iframe if exists) -->
        <div v-if="project.iframe" class="iframe-container">
          <iframe
            :src="project.iframe"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <!-- First image if iframe does not exist -->
        <div v-else-if="project.images.length > 0" class="project-image">
          <img :src="project.images[0].src" :alt="project.images[0].alt" />
          <br />
          <div class="caption">{{ project.images[0].caption }}</div>
        </div>

        <!-- Project info (details and links) -->
        <div class="project-text">
          <b>DETAILS:</b>
          <br /><br />
          <div v-html="project.details"></div>
          <br /><br />
          <div v-for="(link, index) in project.links" :key="index">
            <a :href="link.url" target="_blank">{{ link.text }}</a>
            <br />
          </div>
        </div>

        <!-- Rest of the images -->
        <div
          v-for="(image, index) in project.images.slice(project.iframe ? 0 : 1)"
          :key="index"
          class="project-image"
        >
          <img :src="image.src" :alt="image.alt" />
          <br />
          <div class="caption">{{ image.caption }}</div>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'Project',
    props: {
      project: {
        type: Object,
        required: true,
      },
      expandedProject: {
        type: String,
        required: false,
      },
    },
    computed: {
      isExpanded() {
        return this.expandedProject === this.project.name;
      },
    },
    methods: {
      handleRowClick() {
        const newExpandedProject = this.isExpanded ? null : this.project.name;
        this.$emit('update:expandedProject', newExpandedProject);

        // Auto-scroll on click
        this.$nextTick(() => {
          if (newExpandedProject) {
            const expandableRow = this.$refs.expandableRow;
            if (expandableRow) {
              const navbar = document.querySelector('.navbar-container');
              const navbarHeight = navbar?.offsetHeight || 0;

              const contentContainer =
                document.querySelector('.content-container');
              const contentTop =
                contentContainer?.getBoundingClientRect().top +
                  window.scrollY || 0;

              const rowTop =
                expandableRow.getBoundingClientRect().top + window.scrollY;
              const offset = 5;
              window.scrollTo({
                top: rowTop - contentTop - navbarHeight - offset,
                behavior: 'smooth',
              });
            }
          }
        });
      },
    },
  };
</script>

<style scoped>
  b {
    font-family: satoshiBold;
  }

  th:last-child,
  td:last-child {
    width: 50%;
  }

  tr:not(.exclude):not(.clicked-row):nth-child(2n + 1) {
    background-color: var(--every-other-bg-color);
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
    background-color: var(--table-color-bg);
    color: var(--table-color-text);
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

  .project-image,
  img,
  iframe {
    width: 100%;
    align-self: center;
    align-items: left;
  }

  .project-text {
    font-family: satoshiRegular;
    font-size: 14px;
    padding: 0.5vw;
    padding-left: 1vw;
  }

  img {
    border: 1px solid var(--border-color-2);
  }

  .iframe-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    border: 1px solid var(--border-color-2);
  }

  .iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .caption {
    font-family: satoshiItalic;
    font-size: 12px;
    text-align: left;
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
