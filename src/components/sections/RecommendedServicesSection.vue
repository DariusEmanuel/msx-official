<script setup lang="ts">
import { RouterLink } from "vue-router";
import HeadlineForSection from "@/components/base/HeadlineForSection.vue";
import cameraLogoUrl from "@/assets/recommended-services/camera.png";
import cosmeticsLogoUrl from "@/assets/recommended-services/cosmetics.png";
import danceLogoUrl from "@/assets/recommended-services/dancing.png";

const categories = [
  {
    id: "makeup",
    name: "Make-up Artist",
    category: "Beauty",
    logoSrc: cosmeticsLogoUrl,
    description: "Bridal looks, event glam, touch-ups, and polished styling for special days.",
  },
  {
    id: "photography",
    name: "Photo & Video",
    category: "Memories",
    logoSrc: cameraLogoUrl,
    description: "Event coverage, portraits, highlight videos, and natural memories.",
  },
  {
    id: "dance",
    name: "Wedding Dance Classes",
    category: "Dance",
    logoSrc: danceLogoUrl,
    description: "First dance lessons, private choreography, and friendly classes for couples.",
  },
];
</script>

<template>
  <section class="recommended-services">
    <HeadlineForSection title="Recommended services" font-size="54px" line-height="48px">
      Makeup, photography, dancing classes, and more services you can book for your event.
    </HeadlineForSection>

    <div class="recommended-services__preview">
      <article
        v-for="category in categories"
        :key="category.id"
        class="recommended-services__card"
      >
        <div class="recommended-services__mark" aria-hidden="true">
          <img
            class="recommended-services__logo-image"
            :src="category.logoSrc"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="recommended-services__content">
          <p class="recommended-services__category">{{ category.category }}</p>
          <h3 class="recommended-services__name">{{ category.name }}</h3>
          <p class="recommended-services__description">{{ category.description }}</p>
        </div>
      </article>

      <div class="recommended-services__fade" aria-hidden="true" />
      <RouterLink class="recommended-services__cta" to="/recommended-services">
        Explore partners
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.recommended-services {
  margin: 10px 20px 40px;
  text-align: center;
}

.recommended-services__preview {
  max-width: 960px;
  margin: 12px auto 0;
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.03);
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.recommended-services__card {
  min-height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 18px 12px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02)),
    rgba(24, 24, 24, 0.58);
}

.recommended-services__mark {
  position: relative;
  width: 92px;
  height: 92px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: white;
  background:
    radial-gradient(circle at 30% 22%, rgba(255, 255, 255, 0.35), transparent 28%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.26);
}


.recommended-services__logo-image {
  position: relative;
  z-index: 1;
  width: 58px;
  height: 58px;
  object-fit: contain;
  filter: invert(1);
}

.recommended-services__content {
  color: white;
}

.recommended-services__category {
  margin: 0 0 4px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.recommended-services__name {
  margin: 0;
  color: white;
  font-family: GalvjiBold, Galvji, system-ui, sans-serif;
  font-size: 21px;
  line-height: 1.15;
}

.recommended-services__description {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.74);
  font-size: 13px;
  line-height: 1.4;
}

.recommended-services__fade {
  position: absolute;
  inset: auto 0 0;
  height: 120px;
  background: linear-gradient(to bottom, rgba(24, 24, 24, 0), rgba(24, 24, 24, 0.92));
  pointer-events: none;
  z-index: 1;
}

.recommended-services__cta {
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

.recommended-services__cta:hover {
  transform: translate(-50%, calc(-50% - 1px));
  background: rgba(24, 24, 24, 0.7);
  border-color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 760px) {
  .recommended-services__preview {
    grid-template-columns: 1fr;
    max-height: 520px;
  }

  .recommended-services__card {
    min-height: 190px;
  }
}
</style>
