<script setup>
import { useTemplateRef } from "vue";
import { onMounted, onUnmounted } from "vue";

const parallaxBackground = useTemplateRef("parallaxBackground");
let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      if (parallaxBackground.value) {
        let scrollY = window.scrollY;
        parallaxBackground.value.style.transform = `translateY(${
          scrollY * 0.5
        }px)`;
      }

      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const arrowRef = useTemplateRef("arrowRef");

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
      arrowRef.value.classList.add("parallax__arrow--hidden"); // Fully hide
    }, 500);
  }
}
</script>

<template>
  <div class="parallax">
    <div class="parallax__background" ref="parallaxBackground"></div>

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
  position: relative;
  width: 100%;
  /* iOS address-bar + 100vh causes jumpy/strange scrolling; svh behaves better on mobile */
  height: 100svh;
  min-height: 100vh;
  overflow: hidden;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110svh;
    background-image: url("../assets/hero/ATS_6029.JPG");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    will-change: transform;
    transform: translate3d(0, 0, 0); /* GPU acceleration */
    z-index: -1;
  }

  &__content {
    position: relative;
    text-align: center;
    color: var(--color);
    width: 100%;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
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
  transition: opacity 0.9s ease-out, transform 0.9s ease-out; // Smooth transition

  &--bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
  }

  &--fade-out {
    opacity: 0; // Fade out
    transform: translateY(20px); // Slide down slightly
    pointer-events: none; // Disable interaction
  }

  &--hidden {
    visibility: hidden; // Hide completely AFTER transition ends
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
