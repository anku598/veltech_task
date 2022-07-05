<template>
  <div class="home">
    <HeroSection />
    <LocationGrid />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import LocationGrid from '@/components/LocationGrid.vue';
export default {
  name: 'HomeView',
  components: {
    HeroSection,
    LocationGrid,
  },
};
</script>
