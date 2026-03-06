<script setup lang="ts">
import { RouterLink } from "vue-router";
import HeadlineForSection from "@/components/base/HeadlineForSection.vue";
</script>

<template>
  <section class="more-pictures">
    <headline-for-section title="More pictures" font-size="60px" line-height="50px">
      Explore more photos from shows, events, and behind the scenes.
    </headline-for-section>

    <RouterLink class="more-pictures__cta" to="/more-pictures">
      View galleries
    </RouterLink>
  </section>
</template>

<style scoped>
.more-pictures {
  margin: 10px 20px 40px;
  text-align: center;
}

.more-pictures__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  background: rgba(255, 255, 255, 0.06);
  transition: transform 120ms ease, background-color 120ms ease, border-color 120ms ease;
}

.more-pictures__cta:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}
</style>
