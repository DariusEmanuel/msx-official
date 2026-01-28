<script setup lang="ts">
import type { Image } from "@/stores/imagesStore";
interface ImageSwiperProps {
  images: Image[];
}

const props = defineProps<Required<ImageSwiperProps>>();

const spaceBetween = 10;
const onProgress = (e: any) => {
  const [swiper, progress] = e.detail;
};

const onSlideChange = (e: any) => {};
</script>

<template>
  <swiper-container
    :slides-per-view="1"
    :space-between="spaceBetween"
    centered-slides="true"
    :pagination="{ hideOnClick: true }"
    :breakpoints="{
      480: { slidesPerView: 1.2 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }"
    :simulate-touch="true"
    :allow-touch-move="true"
    grab-cursor="true"
    autoplay-delay="2500"
    rewind="true"
    autoplay-disable-on-interaction="false"
    touch-start-prevent-default="false"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
  >
    <swiper-slide v-for="({ url, alt }, index) in images" :key="index">
      <img :src="url" :alt="alt" class="carousel__image" draggable="false" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  width: 100%;
  height: 100%;
  /* Let vertical scroll win on mobile when the gesture starts on the carousel */
  touch-action: pan-y;
  cursor: grab;
  user-select: none;
}

swiper-container:active {
  cursor: grabbing;
}

swiper-container::part(bullet-active) {
  background-color: rgb(148, 148, 148);
}

swiper-container::part(bullet) {
  background-color: rgba(255, 255, 255, 0.9);
}

swiper-slide {
  width: 100%;
  // height: 220px;
  text-align: center;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__image {
  display: block;
  width: 100%;
  object-fit: contain;
  max-height: 280px;
  -webkit-user-drag: none;
  user-select: none;
}

@media (min-width: 1024px) {
  .carousel__image {
    max-height: 360px;
  }
}
</style>
