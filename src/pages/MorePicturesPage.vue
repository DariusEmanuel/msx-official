<script setup lang="ts">
import { useRouter } from "vue-router";
import { MasonryWall } from "@yeger/vue-masonry-wall";
import { computed } from "vue";
import { useDevice } from "@/composables/useDevice";

type PictureItem = { url: string; alt: string; ratio: string };

const router = useRouter();

const { isMobile } = useDevice();
const columnWidth = computed(() => (isMobile.value ? 150 : 260));
const minColumns = computed(() => (isMobile.value ? 2 : 0));
const maxColumns = computed(() => (isMobile.value ? 2 : 0));

function goBack() {
  // Prefer restoring the previous scroll position (main page) when possible.
  const state = window.history.state as { back?: unknown } | null;
  if (state?.back) router.back();
  else router.push({ path: "/" });
}

const items = computed<PictureItem[]>(() => {
  const filenames = [
    "12e7ab11-9349-48fc-9961-3c4a2958bccc.JPG",
    "2148f114-fd73-4d21-87ca-c28a17bef4e2.JPG",
    "5b2e182c-4e30-450a-bc95-416752d533fc.JPG",
    "6ba66f81-a082-4a65-8a88-b393c5267aed.JPG",
    "766613d5-15bc-408d-af72-7c8930c4cfa2.JPG",
    "8942845c-d140-4de5-b257-7c281ced6a8c.JPG",
    "9ae67d47-c980-4a22-a4d8-ac4a68b5dd18.JPG",
    "SXV_9283.jpg",
    "SXV_9313.jpg",
    "a02693cb-7c13-4f78-89d7-66821b9e10bd.JPG",
    "b7240ef4-a2f5-41c0-9cf0-284e73f5260b.JPG",
    "f5cae22b-6632-456c-a163-6ea6848904fb.JPG",
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
  <main class="more-pictures-page">
    <header class="more-pictures-page__header">
      <button class="more-pictures-page__back" type="button" @click="goBack">
        ← Back
      </button>
      <h1 class="more-pictures-page__title">More pictures</h1>
    </header>

    <section class="more-pictures-page__wall" aria-label="Live show gallery">
      <MasonryWall
        :items="items"
        :ssr-columns="2"
        :column-width="columnWidth"
        :gap="12"
        :key-mapper="keyMapper"
        :min-columns="minColumns || undefined"
        :max-columns="maxColumns || undefined"
      >
        <template #default="{ item }">
          <figure class="more-pictures-page__card" :style="{ aspectRatio: item.ratio }">
            <img class="more-pictures-page__img" :src="item.url" :alt="item.alt" loading="lazy" />
          </figure>
        </template>
      </MasonryWall>
    </section>
  </main>
</template>

<style scoped>
.more-pictures-page {
  padding: 72px 16px 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.more-pictures-page__header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 18px;
}

.more-pictures-page__back {
  flex: 0 0 auto;
  color: rgba(255, 255, 255, 0.92);
  appearance: none;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.06);
  padding: 10px 12px;
  border-radius: 999px;
  font-size: 12px;
  transition: transform 120ms ease, background-color 120ms ease, border-color 120ms ease;
}

.more-pictures-page__back:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.55);
}

.more-pictures-page__title {
  margin: 0;
  font-size: 32px;
  letter-spacing: 0.3px;
  font-family: GalvjiBold, Galvji, system-ui, sans-serif;
}

.more-pictures-page__wall {
  margin-top: 8px;
}

.more-pictures-page__card {
  width: 100%;
  margin: 0;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.more-pictures-page__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
