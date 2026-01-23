<script setup>
import { useImagesStore } from "@/stores/imagesStore";

import ImageSwiper from "@/components/base/ImageSwiper.vue";

const imagesStore = useImagesStore();
</script>

<template>
  <section class="bio">
    <div class="bio__text-content">
      <h6 class="bio__title">
        Need a high-energy sax player to bring the right atmosphere to your
        event?
      </h6>

      <p class="bio__description">
      You’re in the right place. Matei is a musician with over 10 years of experience who has performed around the world, from his hometown in Transylvania to the beaches of Tenerife, at major festivals such as UNTOLD and Electric Castle, as well as international weddings and everything in between.
        <br /><br />
        Available worldwide.
      </p>
    </div>

    <image-swiper
      class="bio__image-swiper"
      :images="imagesStore.imagesUnderBio"
    />
  </section>
</template>

<style lang="scss" scoped>
.bio {
  text-align: center;

  &__text-content {
    padding: 20px;
  }

  &__title {
    color: white;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 10px;
  }

  &__description {
    color: #ffffff;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 0px;
  }
}
</style>
