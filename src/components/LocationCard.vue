<template>
  <router-link to="/" class="location-card">
    <div class="location-card-img">
      <img :src="location.office_image" alt="Veltech France" />
    </div>
    <div class="card-details">
      <div>
        <p class="country-name">{{ location.country_name }}</p>
        <h2 class="country-capital">{{ location.capital }}</h2>
      </div>

      <div class="hover-state-details">
        <p class="short_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse
          obcaecati natus dolorum sed assumenda?
        </p>
        <router-link to="/" class="btn">Explore More</router-link>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "LocationCard",
  props: ["location", "index", "length"],
};
</script>

<style lang="scss" scoped>
.location-card {
  position: relative;
  flex: 50%;
  padding: 10px;

  @include mediaXs {
    flex: 100%;
  }

  @include mediaXl {
    padding: 0;
    &:nth-child(1) {
      grid-column: 1 / 3;
    }

    &:nth-child(6) {
      grid-column: 3 / 5;
    }
  }

  .hover-state-details {
    margin-top: 20px;
    // height: 0;
    // opacity: 0;
    // transition: height 0ms 400ms cubic-bezier(0.075, 0.82, 0.165, 1),
    //   opacity 400ms 0ms cubic-bezier(0.075, 0.82, 0.165, 1);
    .short_text {
      font-size: calc(14px + (18 - 14) * ((100vw - 375px) / (1920 - 375)));
      letter-spacing: 0.1;
      line-height: 1.5;
      color: #fff;
    }
  }

  &:hover {
    .hover-state-details {
      // height: auto;
      // opacity: 1;
      // transition: height 0ms 0ms, opacity 600ms 0ms;
    }
  }
}

.location-card-img {
  height: 100%;
  position: relative;
  &:before {
    @include ImageOverlay;
    @include CommonBorderRadius;
    border-radius: 15px !important;
  }
  img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    position: relative;
    @include CommonBorderRadius;
    border-radius: 15px !important;
  }
}

.card-details {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  color: #fff;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  .country-name {
    @include CommonSubTitle;
    font-size: calc(14px + (18 - 14) * ((100vw - 375px) / (1920 - 375)));
    margin-bottom: 5px;
    font-weight: 300;
  }

  .country-capital {
    @include CommonTitle;
    font-size: calc(23px + (37 - 23) * ((100vw - 375px) / (1920 - 375)));
    text-transform: uppercase;
  }
}
</style>
