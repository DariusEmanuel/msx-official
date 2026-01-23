<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="not-found">
    <h1 class="not-found__title">404</h1>
    <p class="not-found__text">This page doesn’t exist.</p>
    <RouterLink class="not-found__link" to="/">Go back home</RouterLink>
  </main>
</template>

<style scoped>
.not-found {
  padding: 120px 20px 40px;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.not-found__title {
  font-size: 64px;
  margin-bottom: 8px;
  font-family: GalvjiBold, Galvji, system-ui, sans-serif;
}

.not-found__text {
  opacity: 0.85;
  margin-bottom: 16px;
}

.not-found__link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: underline;
}
</style>

