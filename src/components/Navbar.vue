<template>
  <h1>
    <span
      v-for="(char, index) in scrambledText"
      :key="index"
      @mouseover="startScramble(index)"
      @touchstart="startScramble(index)"
      @touchmove="startScramble(index)"
    >
      {{ char }}
    </span>
  </h1>

  <div class="directory">
    <div class="bookmarks">
      <a href="#projects">PROJECTS</a>
      <!-- <a href="#gallery">EXPERIMENTS</a>  -->
      <a href="#tools">TOOLS</a>
      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>
    </div>
  </div>
</template>

<script>
  const ASCII_START = 32;
  const ASCII_END = 126;
  const SCRAMBLE_INTERVAL = 0.07; // Frequency for scrambling charas (seconds)
  const SCRAMBLE_DURATION = 3; // Duration (seconds)
  const RANDOM_SCRAMBLE_DELAY = 10; // Delay for random scrambling (seconds)
  const RANDOM_CHAR_AMT = 6; // Amount of chars to scramble randomly

  export default {
    name: 'Navbar',
    data() {
      return {
        originalText: 'JAKEWELCH.DESIGN',
        scrambledText: 'JAKEWELCH.DESIGN'.split(''),
        scrambleIntervals: [],
        scrambleTimeouts: [],
      };
    },
    methods: {
      startScramble(index) {
        if (!this.scrambleIntervals[index]) {
          this.scrambleChar(index, this.originalText[index]);
        }
      },
      scrambleChar(index, originalChar) {
        this.scrambleIntervals[index] = setInterval(() => {
          const randomChar = this.getRandomChar();
          this.scrambledText.splice(index, 1, randomChar);

          if (randomChar === originalChar) {
            this.stopScrambling(index, originalChar);
          }
        }, SCRAMBLE_INTERVAL * 1000);

        this.scrambleTimeouts[index] = setTimeout(
          () => this.stopScrambling(index, originalChar),
          SCRAMBLE_DURATION * 1000
        );
      },
      stopScrambling(index, originalChar = null) {
        clearInterval(this.scrambleIntervals[index]);
        clearTimeout(this.scrambleTimeouts[index]);
        this.scrambleIntervals.splice(index, 1, null);
        this.scrambleTimeouts.splice(index, 1, null);

        if (originalChar) {
          this.scrambledText.splice(index, 1, originalChar);
        }
      },
      getRandomChar() {
        return String.fromCharCode(
          Math.floor(
            Math.random() * (ASCII_END - ASCII_START + 1) + ASCII_START
          )
        );
      },
      triggerRandomScramble() {
        const indices = new Set();
        while (indices.size < RANDOM_CHAR_AMT) {
          const randomIndex = Math.floor(
            Math.random() * this.originalText.length
          );
          indices.add(randomIndex);
        }

        indices.forEach((index) => this.startScramble(index));
      },
    },
    mounted() {
      this.scrambledText = this.originalText.split('');

      setInterval(() => {
        this.triggerRandomScramble();
      }, RANDOM_SCRAMBLE_DELAY * 1000);
    },
  };
</script>

<style>
  h1 {
    top: 0;
    padding: 0;
    margin: -1px;

    background-color: var(--h1-color-bg);
    color: var(--h1-color-text);

    font-family: satoshiBold;
    font-size: 30px;

    display: flex;
    justify-content: space-between;

    -webkit-touch-callout: none;
  }

  h1 span {
    display: flex;
    justify-content: center;
    align-items: center;

    border-right: 1px solid var(--border-color-2);

    padding: 10px;
    padding-bottom: 12px;
    flex-grow: 1;
    flex-basis: 0;

    width: calc(100% / 16);
    height: 60px;
    overflow: hidden;
  }
  /* 
h2 {
  padding: 1vw;
  margin-top: 1px;

  background-color: var(--h2-color-bg);
  color: var(--h2-color-text);

  font-family: satoshiBold;
  font-size: 18px;
  text-align: left;
} */

  h2.info {
    border: 1px solid var(--border-color);
  }

  .directory {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1vw;
    width: calc(100% + 2px);
    margin: -1px;
    margin-right: 100px;

    background-color: var(--table-color-bg);
    color: var(--table-color-text);
    border: 1px solid var(--border-color);

    font-family: satoshiBold;
    font-size: 18px;
    text-align: left;
  }

  .bookmarks {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  @media (max-width: 600px) {
    .bookmarks {
      width: 100%;
    }

    h1 {
      font-size: 14px;
    }

    h1 span {
      height: 35px;
    }

    h2,
    .directory {
      font-size: 14px;
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
