<template>
  <footer>
    <div class="footer-content">
      <div class="footer-left">
        <a href="mailto:hello@jakewelch.design"> Email</a>
        <a href="https://www.instagram.com/jake___welch/" target="_blank">
          Instagram</a
        >
        <a href="https://linkedin.com/in/jake--welch" target="_blank"
          >LinkedIn</a
        >
        <a href="https://www.are.na/jake-welch" target="_blank"> Are.na</a>
        <a href="https://github.com/jake-welch-design" target="_blank">
          GitHub
        </a>
      </div>
      <div class="footer-right">
        <a href="#" @click.prevent="openColophon">Colophon</a>
        © 2025 Jake Welch
      </div>
    </div>
    <Colophon v-if="isColophonOpen" @close="closeColophon" />
  </footer>
</template>

<script>
  import Colophon from './Colophon.vue';

  export default {
    name: 'Footer',
    components: {
      Colophon,
    },
    data() {
      return {
        isColophonOpen: false, // Tracks whether the colophon is open
      };
    },
    methods: {
      openColophon() {
        this.isColophonOpen = true;
      },
      closeColophon() {
        this.isColophonOpen = false;
      },
    },
  };
</script>

<style scoped>
  footer {
    position: relative;
    z-index: 1;

    background-color: var(--footer-color-bg);
    color: var(--footer-color-text);

    width: calc(100% + 2px);
    margin: -1px;
    padding: 0.5vw;
    padding-left: 15px;
    padding-right: 15px;

    border: 1px solid var(--border-color);

    font-family: satoshiRegular;
    font-size: 14px;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-left a {
    margin-right: 15px;
    color: var(--footer-color-text);
    text-decoration: underline;
    font-size: 14px;
  }

  .footer-left a:hover {
    background: var(--hover-color-bg);
    color: var(--hover-color-text);
  }

  .footer-right {
    text-align: right;
  }

  .footer-right a {
    margin-right: 10px;
    color: var(--footer-color-text);
    text-decoration: underline;
    cursor: pointer;
  }

  .footer-right a:hover {
    background: var(--hover-color-bg);
    color: var(--hover-color-text);
  }

  @media (max-width: 600px) {
    .footer-content,
    .footer-left a {
      font-size: 10px;
    }
  }
</style>
