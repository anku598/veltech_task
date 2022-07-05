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
import LocationCard from './LocationCard.vue';
import locationData from '../../data.js';
export default {
  name: 'LocationGrid',
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 100px;
}
</style>