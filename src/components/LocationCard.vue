<template>
  <div class="location-card">
    <div class="location-card-img">
      <img :src="location.office_image" alt="Veltech France" />
    </div>
    <div class="card-details">
      <p class="country-name">{{ location.country_name }}</p>
      <h2 class="country-capital">{{ location.capital }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationCard',
  props: ['location', 'index', 'length'],
};
</script>

<style lang="scss" scoped>
.location-card {
  position: relative;
  &:nth-child(1) {
    grid-column: 1 / 3;
  }

  &:nth-child(6) {
    grid-column: 3 / 5;
  }
}

.location-card-img {
  height: 100%;
  position: relative;
  &:before {
    @include ImageOverlay;
    @include CommonBorderRadius;
  }
  img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    position: relative;
    @include CommonBorderRadius;
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

  .country-name {
    @include CommonSubTitle;
    margin-bottom: 5px;
  }

  .country-capital {
    @include CommonTitle;
  }
}
</style>