<script setup>
import { useImagesStore } from "@/stores/imagesStore";

import HeadlineForSection from "@/components/base/HeadlineForSection.vue";
import ImageSwiper from "@/components/base/ImageSwiper.vue";

const imagesStore = useImagesStore();
</script>
<template>
  <div class="live-shows">
    <headline-for-section class="about-section__headline" title="Live Shows">
      See Matei in action.</headline-for-section
    >
    <image-swiper :images="imagesStore.imagesUnderLiveShows" />
  </div>
</template>

<style></style>
