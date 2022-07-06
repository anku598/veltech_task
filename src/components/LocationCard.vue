<template>
  <router-link to="/" class="location-card" :style="DynamicGridStyle">
    <div class="location-card-img">
      <img :src="location.office_image" alt="Veltech France" />
    </div>
    <div class="card-details">
      <div class="top-info">
        <p class="country-name">{{ location.country_name }}</p>
        <h2 class="country-capital">{{ location.capital }}</h2>
      </div>

      <div class="hover-state-details">
        <p class="short_text">
          {{ location.short_txt }}
        </p>
        <router-link to="/" class="btn">Explore More</router-link>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'LocationCard',
  props: ['location', 'index', 'length'],

  data() {
    return {
      list: [],
    };
  },

  methods: {
    GenerateGridStyleNumber(index) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] === index) {
          if (index === 0 || index % 2 == 0) {
            return '1/3';
          } else {
            return '3/5';
          }
        }
      }
    },
  },

  computed: {
    DynamicGridStyle: function () {
      return {
        gridColumn: this.GenerateGridStyleNumber(this.index),
      };
    },
  },
  mounted() {
    let init = false;
    let count = 0;
    this.list.push(count);
    for (let i = 0; i < this.length; i++) {
      if (init === false) {
        count = count + 5;
        this.list.push(count);
        init = true;
      } else {
        count++;
        this.list.push(count);
        init = false;
      }
    }
  },
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
  @include mediaSm {
    flex: 100%;
  }

  @include mediaXl {
    padding: 0;
  }

  .hover-state-details {
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    .short_text {
      font-size: calc(14px + (16 - 13) * ((100vw - 375px) / (1920 - 375)));
      letter-spacing: 0.1;
      line-height: 1.3;
      color: #fff;
      transform: translateY(100px);
      transition: all 0.5s ease-in-out;
    }
  }
}

.location-card-img {
  overflow: hidden;
  height: 100%;
  position: relative;
  &:before {
    @include ImageOverlay;
    background: rgba($color: #000000, $alpha: 0.5);
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
    transition: all 0.5s ease-in-out;
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
  width: 80%;
  .top-info {
    margin-top: 20px;
    transition: all 0.5s ease-in-out;
    @include mediaXs {
      margin-top: 65px;
    }

    @include mediaSm {
      margin-top: 65px;
    }
    @include mediaMd {
      margin-top: 65px;
    }
  }

  .country-name {
    @include CommonSubTitle;
    font-size: calc(14px + (18 - 14) * ((100vw - 375px) / (1920 - 375)));
    margin-bottom: 5px;
    font-weight: 300;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    @include mediaXs {
      font-size: 11px;
    }
    @include mediaSm {
      font-size: 13px;
    }

    @include mediaMd {
      font-size: 14px;
    }
  }

  .country-capital {
    @include CommonTitle;
    font-size: calc(23px + (37 - 23) * ((100vw - 375px) / (1920 - 375)));
    text-transform: uppercase;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    @include mediaXs {
      font-size: 17px;
    }
  }
}

.btn {
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 13px;
  text-transform: capitalize;
  font-weight: 500;
  position: absolute;
  bottom: 50px;
  left: 50%;
  width: 50%;
  font-size: calc(13px + (16 - 13) * ((100vw - 375px) / (1920 - 375)));
  transform: translate(-50%, 42px);
  opacity: 0;
  transition: all 0.5s ease-in-out;

  @include mediaXs {
    bottom: 25px;
    padding: 10px;
  }

  @include mediaSm {
    bottom: 25px;
    padding: 10px;
  }

  @include mediaMd {
    bottom: 25px;
    padding: 10px;
  }
}

.location-card {
  &:hover {
    .hover-state-details {
      margin-top: 20px;
      .short_text {
        transform: translateY(0);
      }
    }

    .location-card-img {
      img {
        transform: scale(1.3) rotate(-10deg);
      }
    }

    .top-info {
      margin-top: 0;
    }

    .btn {
      transform: translate(-50%, 0px);
      opacity: 1;
    }
  }
}
</style>
