<script setup lang="ts">
import { RouterLink } from "vue-router";
import HeadlineForSection from "@/components/base/HeadlineForSection.vue";
import { MasonryWall } from "@yeger/vue-masonry-wall";
import { computed } from "vue";
import { useDevice } from "@/composables/useDevice";

type PictureItem = { url: string; alt: string; ratio: string };

const { isMobile } = useDevice();
const columnWidth = computed(() => (isMobile.value ? 130 : 160));
const minColumns = computed(() => (isMobile.value ? 2 : 0));
const maxColumns = computed(() => (isMobile.value ? 2 : 0));

const previewItems = computed<PictureItem[]>(() => {
  const filenames = [
    "12e7ab11-9349-48fc-9961-3c4a2958bccc.JPG",
    "2148f114-fd73-4d21-87ca-c28a17bef4e2.JPG",
    "6ba66f81-a082-4a65-8a88-b393c5267aed.JPG",
    "766613d5-15bc-408d-af72-7c8930c4cfa2.JPG",
    "8942845c-d140-4de5-b257-7c281ced6a8c.JPG",
    "9ae67d47-c980-4a22-a4d8-ac4a68b5dd18.JPG",
    "SXV_9283.jpg",
    "SXV_9313.jpg",
    "a02693cb-7c13-4f78-89d7-66821b9e10bd.JPG",
    "b7240ef4-a2f5-41c0-9cf0-284e73f5260b.JPG",
  ];

  const ratios = ["4 / 5", "1 / 1", "3 / 4", "16 / 9", "2 / 3"];
  return filenames.map((filename, index) => ({
    url: new URL(`/src/assets/liveShows/${filename}`, import.meta.url).href,
    alt: "Matei Sax live show photo",
    ratio: ratios[index % ratios.length],
  }));
});

const keyMapper = (item: PictureItem) => item.url;
</script>

<template>
  <section class="more-pictures">
    <headline-for-section title="More pictures" font-size="60px" line-height="50px">
      Explore more photos from shows, events, and behind the scenes.
    </headline-for-section>

    <div class="more-pictures__preview" aria-label="Live show photo preview">
      <MasonryWall
        class="more-pictures__wall"
        :items="previewItems"
        :ssr-columns="2"
        :column-width="columnWidth"
        :gap="10"
        :key-mapper="keyMapper"
        :min-columns="minColumns || undefined"
        :max-columns="maxColumns || undefined"
      >
        <template #default="{ item }">
          <div class="more-pictures__tile" :style="{ aspectRatio: item.ratio }">
            <img class="more-pictures__img" :src="item.url" :alt="item.alt" loading="lazy" />
          </div>
        </template>
      </MasonryWall>
      <div class="more-pictures__fade" aria-hidden="true" />
      <RouterLink class="more-pictures__cta" to="/more-pictures">
        See full gallery
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.more-pictures {
  margin: 10px 20px 40px;
  text-align: center;
}

.more-pictures__preview {
  max-width: 960px;
  margin: 12px auto 0;
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.03);
  max-height: 360px;
}

.more-pictures__wall {
  padding: 10px;
}

.more-pictures__tile {
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.more-pictures__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.more-pictures__fade {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 140px;
  background: linear-gradient(to bottom, rgba(24, 24, 24, 0), rgba(24, 24, 24, 0.92));
  pointer-events: none;
  z-index: 1;
}

.more-pictures__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  background: rgba(24, 24, 24, 0.55);
  backdrop-filter: blur(10px);
  transition: transform 120ms ease, background-color 120ms ease, border-color 120ms ease;
}

.more-pictures__cta:hover {
  transform: translate(-50%, calc(-50% - 1px));
  background: rgba(24, 24, 24, 0.7);
  border-color: rgba(255, 255, 255, 0.6);
}
</style>
