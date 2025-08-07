<template>
  <h2 id="about" class="about">ABOUT</h2>
  <div class="about-me">
    <div class="background-container">
      <div class="text-overlay">
        <div class="project-text">
          Hi! My name is Jake, and I am a designer, creative technologist, and
          generative artist from Salt Lake City, UT, currently living and in
          Brooklyn, NY. I use my experience as a design researcher and creative
          developer to create systems and experiences for humans across
          disciplines, physical and digital.
          <br />
          <br />If I'm not in the weeds of a new project, you might find me in a
          <a
            href="https://www.are.na/jake-welch/art-gallery-zdcjhk1yrrc"
            target="_blank"
            >museum</a
          >,
          <a href="https://www.goodreads.com/jakewelch" target="_blank"
            >reading a book</a
          >, or snuggling up with my cat
          <a href="/assets/images/pepper.jpeg" target="_blank"> Pepper</a>.
          <br /><br />
        </div>
        <div class="resume-download">
          <a href="/assets/files/WELCH_JAKE_Resume.pdf" target="_blank">
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
    background-color: var(--primary);
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

    .text-overlay {
      width: 90%;
    }

    .background-container {
      max-height: 50vh;
    }
  }
</style>
