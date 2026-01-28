<script setup lang="ts">
import { useImagesStore } from "@/stores/imagesStore";
import { computed, onMounted, onUnmounted, ref } from "vue";

const imagesStore = useImagesStore();

// Duplicate items so the marquee can wrap seamlessly.
const items = computed(() => [
  ...imagesStore.collaborations,
  ...imagesStore.collaborations,
]);

const trackRef = ref<HTMLDivElement | null>(null);
const isDragging = ref(false);

let rafId: number | null = null;
let lastTs = 0;
let offsetPx = 0; // how far we've translated (to the left)
let contentWidth = 0; // width of one "set" of items (half of duplicated track)

let dragStartX = 0;
let dragStartOffset = 0;

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

function measure() {
  const el = trackRef.value;
  if (!el) return;
  const w = el.scrollWidth;
  // We render two identical sets; one set is half the scrollWidth.
  contentWidth = Math.max(1, w / 2);
  offsetPx = ((offsetPx % contentWidth) + contentWidth) % contentWidth;
}

function step(ts: number) {
  if (!lastTs) lastTs = ts;
  const dt = Math.min(50, ts - lastTs);
  lastTs = ts;

  // Auto speed (px/sec). Tune as needed.
  const speed = 40;
  if (!isDragging.value) {
    offsetPx += (speed * dt) / 1000;
    if (offsetPx >= contentWidth) offsetPx -= contentWidth;
  }

  const el = trackRef.value;
  if (el) {
    el.style.transform = `translate3d(${-offsetPx}px, 0, 0)`;
  }

  rafId = requestAnimationFrame(step);
}

function onPointerDown(e: PointerEvent) {
  // Only primary button for mouse.
  if (e.pointerType === "mouse" && e.button !== 0) return;
  const el = trackRef.value;
  if (!el) return;

  isDragging.value = true;
  dragStartX = e.clientX;
  dragStartOffset = offsetPx;
  el.setPointerCapture?.(e.pointerId);
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging.value) return;
  const dx = e.clientX - dragStartX;
  offsetPx = dragStartOffset - dx;

  // Wrap while dragging.
  if (contentWidth > 0) {
    offsetPx = ((offsetPx % contentWidth) + contentWidth) % contentWidth;
  }
}

function onPointerUp(e: PointerEvent) {
  const el = trackRef.value;
  if (!el) return;
  isDragging.value = false;
  el.releasePointerCapture?.(e.pointerId);
}

function onResize() {
  measure();
}

onMounted(() => {
  // Wait a tick for images/fonts layout to settle.
  setTimeout(() => {
    measure();
    if (!prefersReducedMotion) rafId = requestAnimationFrame(step);
  }, 0);
  window.addEventListener("resize", onResize, { passive: true });
});

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId);
  window.removeEventListener("resize", onResize);
});
</script>
<template>
  <div class="collaborations">
    <div class="collaborations__subtitle">
      Matei Sax: Over 100+ Music Industry Collaborations and Counting
    </div>
    <div class="collaborations__logos">
      <div
        class="collaborations__marquee"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
      >
        <div ref="trackRef" class="collaborations__track" :class="{ 'is-dragging': isDragging }">
          <div
            v-for="({ url, alt, text }, index) in items"
            :key="index"
            class="collaborations__item"
          >
            <img :src="url" :alt="alt" loading="lazy" @load="measure" />
            <p>{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collaborations {
  &__subtitle {
    margin: 40px 0 10px;
    font-size: 1.1rem;
  }

  &__logos {
    overflow: hidden;
    padding: 30px 0;
    position: relative;
  }

  &__logos::before,
  &__logos::after {
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    content: "";
    z-index: 2;
    pointer-events: none;
  }

  &__logos::before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), #181818);
  }

  &__logos::after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #181818);
  }

  &__marquee {
    width: 100%;
    overflow: hidden;
    touch-action: pan-y;
    cursor: grab;
    user-select: none;
  }

  &__marquee:active {
    cursor: grabbing;
  }

  &__track {
    display: flex;
    align-items: center;
    gap: 40px;
    will-change: transform;
    transform: translate3d(0, 0, 0);
  }

  &__track.is-dragging {
    cursor: grabbing;
  }

  &__item {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 4px 0;
    > img {
      height: 50px;
      border-radius: 50%;
      opacity: 0.8;
      image-rendering: optimizeQuality;
    }
    > p {
      font-size: 0.85rem;
      opacity: 0.85;
      white-space: nowrap;
    }
  }
}
</style>
