<script setup lang="ts">
import HeadlineForSection from "@/components/base/HeadlineForSection.vue";
import SpotifyContainer from "@/components/base/SpotifyContainer.vue";
import YoutubeContainer from "@/components/base/YoutubeContainer.vue";
import { computed } from "vue";
import { useDevice } from "@/composables/useDevice";

const { isDesktop } = useDevice();
const embedWidth = computed(() => (isDesktop.value ? "60%" : "80%"));
</script>
<template>
  <headline-for-section
    title="listen"
    font-size="82px"
    line-height="96px"
    font-size-span="16px"
    line-height-span="20px"
  >
    Find out more about Matei through his live streams, concerts, releases and
    vlogs.
  </headline-for-section>
  <SpotifyContainer
    :width="embedWidth"
    :height="352"
    title="Matei Sax on Spotify"
    src="https://open.spotify.com/embed/artist/11O4kxlEb8Q2cMBePFXUGC?utm_source=generator&theme=0"
  />
  <YoutubeContainer
    :width="embedWidth"
    height="auto"
    title="Si No Estas - Iñigo Quintero with Live Elements from Matei Sax in Tenerife, Canary Islands 🌴"
    src="https://www.youtube.com/embed/Z_84mBRPxJU"
  />
</template>
