<template>
  <div class="location-grid">
    <LocationCard
      v-for="(location, idx) in locations"
      :key="'offices' + idx"
      :location="location"
      :index="idx + 1"
      :length="locations.length"
    />
  </div>
</template>

<script>
import LocationCard from "./LocationCard.vue";
import locationData from "../../data.js";
export default {
  name: "LocationGrid",
  components: {
    LocationCard,
  },

  data() {
    return {
      locations: locationData,
    };
  },
};
</script>

<style lang="scss" scoped>
.location-grid {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: inherit;

  @include mediaXl {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 80%;
  }
}
</style>
