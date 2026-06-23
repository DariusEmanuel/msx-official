<script setup>
import { useTemplateRef } from "vue";
import { onMounted, onUnmounted } from "vue";

const parallaxRef = useTemplateRef("parallaxRef");
const arrowRef = useTemplateRef("arrowRef");

let frameId = 0;

function updateParallax() {
  frameId = 0;

  if (!parallaxRef.value) {
    return;
  }

  const heroRect = parallaxRef.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (heroRect.bottom <= 0 || heroRect.top >= viewportHeight) {
    return;
  }

  const maxOffset = heroRect.height * 0.12;
  const scrolledThroughHero = Math.min(heroRect.height, Math.max(0, -heroRect.top));
  const offset = Math.min(maxOffset, scrolledThroughHero * 0.25);

  parallaxRef.value.style.setProperty("--parallax-y", `${offset}px`);
}

function requestParallaxUpdate() {
  if (frameId) {
    return;
  }

  frameId = requestAnimationFrame(updateParallax);
}

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  updateParallax();
  window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
  window.addEventListener("resize", requestParallaxUpdate);
});

onUnmounted(() => {
  window.removeEventListener("scroll", requestParallaxUpdate);
  window.removeEventListener("resize", requestParallaxUpdate);

  if (frameId) {
    cancelAnimationFrame(frameId);
  }
});

function onArrowClick(e) {
  e.preventDefault();
  window.scrollBy({
    top: 600,
    left: 0,
    behavior: "smooth",
  });
  if (arrowRef.value) {
    arrowRef.value.classList.add("parallax__arrow--fade-out");
    setTimeout(() => {
      arrowRef.value.classList.add("parallax__arrow--hidden");
    }, 500);
  }
}
</script>

<template>
  <div class="parallax" ref="parallaxRef">
    <div class="parallax__background"></div>

    <div class="parallax__content">
      <img class="parallax__logo" src="../assets/msx-logo.png" />
      <h1 class="parallax__title">Matei Sax Official</h1>

      <div ref="arrowRef" class="parallax__arrow arrow parallax__arrow--bounce">
        <a class="fa fa-arrow-down fa-2x" href="#" @click="onArrowClick"></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$bg-color: #2d2d37; // Dark blue
$primary-color: #fd6b21; // Orange

.parallax {
  --parallax-y: 0px;

  position: relative;
  isolation: isolate;
  width: 100%;
  /* iOS address-bar + 100vh causes jumpy/strange scrolling; svh behaves better on mobile */
  height: 100svh;
  min-height: 100vh;
  overflow: hidden;
  /* Ensure vertical scroll gestures are not blocked/captured on mobile */
  touch-action: pan-y;

  &__background {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: url("../assets/hero/ATS_6029.JPG");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transform: translate3d(0, var(--parallax-y), 0) scale(1.24);
      transform-origin: center;
      will-change: transform;
    }
  }

  &__content {
    position: absolute;
    inset: 0;
    text-align: center;
    color: var(--color);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    touch-action: pan-y;
  }

  &__logo {
    width: 240px;
    margin: 0 auto;
  }

  &__title {
    font-size: 2rem;
  }
}

// TODO: FIX THIS CSS: MAKE IT USE BEM
a {
  color: white;
  text-decoration: none;
  width: 50px;
  height: 50px;
  display: block;
  -webkit-tap-highlight-color: transparent !important;

  outline: none !important;
}

.parallax__arrow {
  position: absolute;
  top: 80%;
  text-align: center;
  z-index: 1;
  transition: opacity 0.9s ease-out, transform 0.9s ease-out;

  &--bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
  }

  &--fade-out {
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
  }

  &--hidden {
    visibility: hidden;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
