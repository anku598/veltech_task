<template>
  <div class="hero container">
    <div class="hero-img">
      <img src="@/assets/images/hero_image.jpg" alt="Hero Banner Image" />
    </div>
    <div class="hero-details">
      <p class="sub-title">Front-End</p>
      <h2 class="title">Valtech_</h2>
      <p class="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum
        nam, quam nihil aperiam a consectetur labore reprehenderit voluptatum
        vero!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  height: calc(90vh - 30px);
  position: relative;
  padding-top: 30px;
  margin-bottom: 100px;

  @include mediaXs {
    height: 100%;
  }

  @include mediaXs {
    height: 100%;
    padding-top: 0;
  }

  @include mediaSm {
    height: 100%;
    padding-top: 0;
  }

  @include mediaMd {
    height: 100%;
    padding-top: 0;
  }

  &.container {
    @include mediaXs {
      width: 100%;
    }
    @include mediaSm {
      width: 100%;
    }

    @include mediaMd {
      width: 100%;
    }
  }

  .hero-img {
    height: 100%;
    position: relative;

    img {
      @include ImageFit;
      @include CommonBorderRadius;
    }

    &:before {
      @include ImageOverlay;
      @include CommonBorderRadius;
    }
  }

  .hero-details {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    z-index: 10;
    @include mediaXs {
      width: 80%;
      position: relative;
      transform: inherit;
      color: #000;
      margin: 0 auto;
      top: 0;
      left: 0;
      text-align: left;
      margin-top: 50px;
    }

    @include mediaSm {
      width: 80%;
      position: relative;
      transform: inherit;
      color: #000;
      margin: 0 auto;
      top: 0;
      left: 0;
      text-align: left;
      margin-top: 50px;
    }
    .sub-title {
      @include CommonSubTitle;
    }

    .title {
      @include CommonTitle;
      margin-bottom: 10px;
    }

    .paragraph {
      font-size: calc(14px + (18 - 14) * ((100vw - 375px) / (1920 - 375)));
      letter-spacing: 0.1;
      line-height: 1.5;
    }
  }
}
</style>