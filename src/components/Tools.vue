<template>
  <tr
    :class="{ 'project-row': true, 'clicked-row': isExpanded }"
    @click="toggleExpand"
  >
    <td>{{ tool.date }}</td>
    <td class="name-cell" v-html="tool.name"></td>
    <td>{{ tool.type }}</td>
    <td v-html="tool.description"></td>
  </tr>

  <tr class="expandable-row" v-if="isExpanded">
    <td :colspan="expandedColspan">
      <div class="expanded-content">
        <!-- First element (video if exists) -->
        <div v-if="tool.video" class="video-container">
          <video
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            class="project-video"
          >
            <source :src="tool.video.webm" type="video/webm" />
            <source :src="tool.video.mp4" type="video/mp4" />
            <img :src="tool.video.poster" alt="Video not supported" />
          </video>
        </div>

        <!-- Second element (iframe if exists and no video) -->
        <div v-else-if="tool.iframe" class="iframe-container">
          <iframe
            :src="tool.iframe"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <!-- First image if neither video nor iframe exists -->
        <div v-else-if="tool.images.length > 0" class="project-image">
          <img :src="tool.images[0].src" :alt="tool.images[0].alt" />
          <br />
          <div class="caption">{{ tool.images[0].caption }}</div>
        </div>

        <!-- Rest of the images -->
        <div
          v-for="(image, index) in tool.images.slice(
            tool.video || tool.iframe ? 0 : 1
          )"
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
  import { visibleColumnCount } from '@/utils/visibleColumns.js';

  export default {
    name: 'Tools',
    props: {
      tool: {
        type: Object,
        required: true,
      },
      isExpanded: {
        type: Boolean,
        required: true,
      },
    },
    computed: {
      // Only the columns still on screen, so the expanded row can't add any.
      expandedColspan() {
        return visibleColumnCount.value;
      },
    },
    methods: {
      toggleExpand() {
        this.$emit('toggle-expand', this.tool.name);
      },
    },
  };
</script>

<style scoped>
  b {
    font-family: var(--font-sans);
    font-weight: 700;
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
    font-family: var(--font-sans);
    font-weight: 400;
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
    /* Set from JS to the space left between the navbar and the footer: a row
       with more content than that fills the window and scrolls inside itself,
       leaving the next row above the footer, while a short one keeps to its
       content. The fallback applies before the measurement lands. */
    max-height: var(--expanded-row-height, 67vh);
    overflow: -moz-scrollbars-vertical;
    overflow-y: auto;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .project-row:hover,
  .clicked-row {
    background-color: var(--hover-color-bg);
    color: var (--hover-color-text);
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
    font-family: var(--font-sans);
    font-weight: 400;
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

  .video-container {
    width: 100%;
    border: 1px solid var(--border-color-2);
  }

  .project-video {
    width: 100%;
    height: auto;
    display: block;
  }

  .caption {
    font-family: var(--font-sans);
    font-style: italic;
    font-size: 12px;
    text-align: left;
  }

  @media (max-width: 600px) {
    /* The panel carries the gutter itself, at the same 14px as the rows
       above it, so its own text blocks sit flush with its edges instead of
       adding a second inset. */
    .expanded-content {
      max-height: var(--expanded-row-height, 400px);
      grid-template-columns: 1fr;
      padding: 14px;
      gap: 14px;
    }

    td,
    th {
      font-size: 10px;
      /* The vw padding collapses to a couple of px at this width, so the cells
         are given real room in px instead, matching the ~14px gutter 1vw gives
         the desktop layout. */
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 14px;
      padding-right: 14px;
    }

    .project-text,
    .caption {
      font-size: 10px;
      padding: 0;
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
