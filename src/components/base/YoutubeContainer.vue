<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue";

interface YoutubeProps {
  width: string;
  height: number | "auto";
  title: string;
  src: string;
}
const props = defineProps<Required<YoutubeProps>>();

const loaded = ref(false);
const failed = ref(false);
let loadTimer: ReturnType<typeof setTimeout> | undefined;

const openHref = computed(() => {
  try {
    const url = new URL(props.src);
    if (url.hostname === "www.youtube.com" && url.pathname.startsWith("/embed/")) {
      const videoId = url.pathname.split("/embed/")[1]?.split("/")[0] ?? "";
      if (videoId) return `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
    }
    if (url.hostname === "youtu.be") {
      const videoId = url.pathname.replace("/", "");
      if (videoId) return `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
    }
    return url.toString();
  } catch {
    return props.src;
  }
});

function clearLoadTimer() {
  if (loadTimer) clearTimeout(loadTimer);
  loadTimer = undefined;
}

function armLoadFallback() {
  clearLoadTimer();
  loaded.value = false;
  failed.value = false;
  loadTimer = setTimeout(() => {
    if (!loaded.value) failed.value = true;
  }, 9000);
}

function onIframeLoad() {
  loaded.value = true;
  clearLoadTimer();
}

function onIframeError() {
  failed.value = true;
  clearLoadTimer();
}

watch(() => props.src, armLoadFallback, { immediate: true });
onBeforeUnmount(clearLoadTimer);
</script>

<template>
  <div class="youtube-container" :style="{ width: props.width }">
    <iframe
      v-if="!failed"
      class="youtube-container__iframe"
      :title
      :width="props.width"
      :height
      :src
      frameBorder="0"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      loading="lazy"
      @load="onIframeLoad"
      @error="onIframeError"
    ></iframe>
    <div v-else class="youtube-container__fallback" role="note">
      <div class="youtube-container__fallback-title">YouTube video couldn’t load.</div>
      <a
        class="youtube-container__fallback-link"
        :href="openHref"
        target="_blank"
        rel="noreferrer noopener"
      >
        Watch on YouTube
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.youtube-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  margin-bottom: 20px;
  &__iframe {
    border-radius: 12px;
  }

  &__fallback {
    width: 100%;
    min-height: 140px;
    border-radius: 12px;
    border: 1px dashed rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.92);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 18px 16px;
    text-align: center;
  }

  &__fallback-title {
    font-size: 14px;
    letter-spacing: 0.2px;
  }

  &__fallback-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.45);
    color: rgba(255, 255, 255, 0.92);
    text-decoration: none;
    transition: transform 120ms ease, background-color 120ms ease, border-color 120ms ease;

    &:hover {
      transform: translateY(-1px);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.6);
    }
  }
}
</style>
