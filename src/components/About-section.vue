<template>
  <h2 id="about" class="about">ABOUT</h2>
  <div class="about-me">
    <div class="background-container">
      <div class="text-overlay">
        <div class="project-text">
          My name is Jake Welch and I am a designer, creative technologist, and
          generative artist living in Brooklyn, NY. I combine research and
          programming to design systems which are flexible and interactive. My
          work exists everywhere from the web, to events, to exhibitions.
          <br />
          <br />When I’m not creating something, you might find me in a museum,
          reading a book, or snuggling up with my cat
          <a href="/assets/images/pepper.jpeg" target="_blank"> Pepper</a>.
          <br /><br />
        </div>
        <div class="resume-download">
          <a
            href="/assets/files/WELCH_JAKE_Resume_2025_03_03.pdf"
            target="_blank"
          >
            ↳ Download my resume</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

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

  h2.about {
    border: 1px solid var(--border-color);
  }

  .text-overlay .project-text a {
    font-size: 16px;
    color: var(--primary);
  }

  .about-me {
    position: relative;
    background-color: var(--table-color-bg);
    color: var(--table-color-text);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .background-container {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 80vh;
    background-image: url('@/assets/images/about/layers-on-layers.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .text-overlay {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 33%;
    color: white;
  }

  .project-text {
    font-family: satoshiRegular;
    font-size: 16px;
    line-height: 1.5;
  }

  .resume-download a {
    font-family: satoshiRegular;
    font-size: 16px;
    text-decoration: none;
    background-color: var(--secondary);
    color: var(--primary);
  }

  .resume-download a:hover {
    color: var(--secondary); /* Optional: Add hover effect */
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 14px;
    }

    .text-overlay .project-text a,
    .project-text,
    .resume-download a {
      font-size: 12px;
    }

    .background-container {
      max-height: 50vh;
    }
  }
</style>
