<template>
  <div class="colophon-overlay" @click="close">
    <div class="colophon-popup" @click.stop>
      <button class="close-btn" @click="close">x</button>
      <h2>COLOPHON</h2>
      <div class="colophon-content">
        This site was built from scratch using native HTML/CSS/JS in 2024 and
        rebuilt with Vue 3 in 2025. It is currently hosted on
        <a
          href="https://github.com/jake-welch-design/jakewelch.design_v5"
          target="_blank"
          >GitHub pages.</a
        >
        As a proponent of free open-source software, please feel free to check
        out my code and use it to create something yourself.
        <br />
        <br />
        <b>FONT:</b>
        <br /><a href="https://www.fontshare.com/fonts/satoshi" target="_blank"
          >'Satoshi' by Indian Type Foundry</a
        >
        <br />
        <br />
        <br />
        <b>COLOR PALETTE:</b>
        <br />
        <div class="color-palette">
          <div class="primary-color">(#FFFFFF)</div>
          ,&nbsp;
          <div class="secondary-color">(#1B1B1B)</div>
          ,&nbsp;
          <div class="tetriary-color">(#CFCFCF)</div>
          ,&nbsp;
          <div class="quaternary-color">(#0000FF)</div>
        </div>
        <br />
        <br />
        <br />
        <b>APROACH:</b>
        <br />
        In developing this site, I was inspired by the simplicity and efficacy
        of HTML tables as a native built-in method for categorizing and
        organizing information on the web. As a multi-disciplinary designer with
        a diverse array of work, I wanted my portfolio website to have the same
        ethos in being a place where my work could be organized and shared in a
        format that's simple, lightweight, and easy to navigate.
        <br />
        <br />
        Send me an email or DM me on Instagram if you find any bugs, have any
        feedback, or just want to say hello! Thank you for visiting ♥
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Colophon',
    methods: {
      close() {
        this.$emit('close'); // Emit a close event to notify the parent component
      },
    },
  };
</script>

<style scoped>
  .color-palette {
    display: inline-flex;
  }

  .primary-color {
    color: var(--secondary);
    background-color: var(--primary);
    box-shadow: 0 0 0 1px var(--primary);
  }

  .secondary-color {
    color: var(--primary);
    background-color: var(--secondary);
  }

  .tetriary-color {
    color: var(--secondary);
    background-color: var(--tetriary);
  }

  .quaternary-color {
    color: var(--primary);
    background-color: var(--quaternary);
  }

  h2 {
    padding: 1vw;
    background-color: var(--h2-color-bg);
    color: var(--h2-color-text);
    font-family: satoshiBold;
    font-size: 18px;
    text-align: left;
  }

  .colophon-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .colophon-popup {
    background: white;
    /* padding: 20px; */
    /* border-radius: 8px; */
    max-width: 500px;
    width: 90%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .colophon-content {
    font-family: satoshiRegular;
    font-size: 14px;
    padding: 1vw;
    padding-left: 1vw;
  }

  .close-btn {
    font-family: satoshiRegular;
    position: absolute;
    top: 0.5vw;
    right: 1vw;
    color: white;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  .close-btn:hover {
    background-color: white;
    color: var(--secondary);
  }
</style>
