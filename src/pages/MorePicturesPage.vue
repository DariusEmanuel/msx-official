<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="more-pictures-page">
    <header class="more-pictures-page__header">
      <RouterLink class="more-pictures-page__back" to="/">← Back</RouterLink>
      <h1 class="more-pictures-page__title">More pictures</h1>
    </header>

    <section class="more-pictures-page__grid-block" aria-label="Gallery grid 1">
      <div class="more-pictures-page__grid">
        <div v-for="i in 12" :key="`g1-${i}`" class="more-pictures-page__cell" />
      </div>
    </section>

    <section class="more-pictures-page__grid-block" aria-label="Gallery grid 2">
      <div class="more-pictures-page__grid">
        <div v-for="i in 12" :key="`g2-${i}`" class="more-pictures-page__cell" />
      </div>
    </section>

    <section class="more-pictures-page__grid-block" aria-label="Gallery grid 3">
      <div class="more-pictures-page__grid">
        <div v-for="i in 12" :key="`g3-${i}`" class="more-pictures-page__cell" />
      </div>
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
  text-decoration: none;
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

.more-pictures-page__grid-block {
  margin: 0 0 22px;
}

.more-pictures-page__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

@media (min-width: 860px) {
  .more-pictures-page__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
  }
}

.more-pictures-page__cell {
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  border: 1px dashed rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.04);
}
</style>
