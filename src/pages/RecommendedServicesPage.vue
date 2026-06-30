<script setup lang="ts">
import { useRouter } from "vue-router";
import ImageSwiper from "@/components/base/ImageSwiper.vue";
import { useRecommendedServicesStore } from "@/stores/recommendedServicesStore";

const router = useRouter();
const recommendedServicesStore = useRecommendedServicesStore();
const recommendedServicesBreakpoints = {
  480: { slidesPerView: 1.05 },
  640: { slidesPerView: 1.2 },
  768: { slidesPerView: 1.35 },
  1024: { slidesPerView: 1.6 },
};

function goBack() {
  const state = window.history.state as { back?: unknown } | null;
  if (state?.back) router.back();
  else router.push({ path: "/" });
}
</script>

<template>
  <main class="recommended-services-page">
    <header class="recommended-services-page__header">
      <button class="recommended-services-page__back" type="button" @click="goBack">
        ← Back
      </button>
      <div>
        <p class="recommended-services-page__eyebrow">Bookable partners</p>
        <h1 class="recommended-services-page__title">Recommended services</h1>
      </div>
    </header>

    <section class="recommended-services-page__intro">
      <p>
        Placeholder recommendations for trusted providers that can complete an event booking
        experience alongside Matei Sax.
      </p>
    </section>

    <section class="recommended-services-page__list" aria-label="Recommended service providers">
      <article
        v-for="provider in recommendedServicesStore.providers"
        :key="provider.id"
        class="provider"
        :class="{ 'provider--no-gallery': provider.galleryImages.length === 0 }"
        :aria-labelledby="`${provider.id}-title`"
      >
        <div class="provider__profile">
          <div class="provider__spotlight" aria-label="Provider placeholder images">
            <img
              v-for="(image, imageIndex) in provider.spotlightImages"
              :key="image.alt"
              class="provider__spotlight-image"
              :class="{
                'provider__spotlight-image--valart-logo':
                  provider.id === 'valentina-valart-dancing-school' &&
                  imageIndex === provider.spotlightImages.length - 1,
              }"
              :src="image.url"
              :alt="image.alt"
              loading="lazy"
            />
          </div>

          <div class="provider__text">
            <p class="provider__name">{{ provider.name }}</p>
            <h2 :id="`${provider.id}-title`" class="provider__brand">
              {{ provider.brand }}
            </h2>
            <p class="provider__description">{{ provider.description }}</p>

            <ul class="provider__services" aria-label="Services">
              <li v-for="service in provider.services" :key="service">
                {{ service }}
              </li>
            </ul>

            <address class="provider__contacts">
              <template v-for="contact in provider.contacts" :key="`${provider.id}-${contact.label}`">
                <a
                  v-if="contact.href"
                  class="provider__contact"
                  :href="contact.href"
                  :target="contact.href.startsWith('http') ? '_blank' : undefined"
                  :rel="contact.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                >
                  <span>{{ contact.label }}</span>
                  {{ contact.value }}
                </a>
                <span v-else class="provider__contact">
                  <span>{{ contact.label }}</span>
                  {{ contact.value }}
                </span>
              </template>
            </address>
          </div>
        </div>

        <div
          v-if="provider.galleryImages.length > 0"
          class="provider__carousel"
          :aria-label="`${provider.brand} placeholder gallery`"
        >
          <ImageSwiper
            :images="provider.galleryImages"
            :breakpoints="recommendedServicesBreakpoints"
          />
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.recommended-services-page {
  padding: 72px 16px 44px;
  max-width: 1120px;
  margin: 0 auto;
}

.recommended-services-page__header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 18px;
}

.recommended-services-page__back {
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

.recommended-services-page__back:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.55);
}

.recommended-services-page__eyebrow {
  margin: 0 0 4px;
  color: rgba(255, 255, 255, 0.62);
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.recommended-services-page__title {
  margin: 0;
  color: white;
  font-size: 32px;
  letter-spacing: 0.3px;
  font-family: GalvjiBold, Galvji, system-ui, sans-serif;
}

.recommended-services-page__intro {
  max-width: 720px;
  margin: 0 0 22px;
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.6;
}

.recommended-services-page__intro p {
  margin: 0;
}

.recommended-services-page__list {
  display: grid;
  gap: 18px;
}

.provider {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1.05fr);
  gap: 18px;
  align-items: stretch;
  padding: 18px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.13), transparent 36%),
    rgba(255, 255, 255, 0.045);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
}

.provider--no-gallery {
  grid-template-columns: 1fr;
}

.provider__profile {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: 18px;
  align-items: center;
}

.provider__spotlight {
  position: relative;
  min-height: 160px;
}

.provider__spotlight-image {
  position: absolute;
  width: 116px;
  height: 116px;
  border-radius: 50%;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.3);
}

.provider__spotlight-image:first-child {
  left: 0;
  top: 6px;
  object-position: center -4px;
}

.provider__spotlight-image:last-child {
  right: 0;
  bottom: 0;
  width: 100px;
  height: 74px;
  padding: 8px;
  border-radius: 18px;
  object-fit: contain;
  background: transparent;
}

.provider__spotlight-image.provider__spotlight-image--valart-logo {
  right: -15px;
  width: auto;
  padding: 0;
  background: rgba(215, 179, 155, 0.7);
}

.provider__name {
  margin: 0 0 4px;
  color: rgba(255, 255, 255, 0.62);
  font-size: 14px;
}

.provider__brand {
  margin: 0;
  color: white;
  font-family: GalvjiBold, Galvji, system-ui, sans-serif;
  font-size: 26px;
  line-height: 1.12;
}

.provider__description {
  margin: 10px 0 0;
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.5;
}

.provider__services {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
}

.provider__services li {
  padding: 7px 10px;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.88);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 13px;
}

.provider__contacts {
  display: grid;
  gap: 8px;
  margin: 16px 0 0;
  font-style: normal;
}

.provider__contact {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  font-size: 14px;
}

.provider__contact:hover {
  color: white;
}

.provider__contact span {
  color: rgba(255, 255, 255, 0.55);
}

.provider__carousel {
  height: clamp(360px, 42vw, 520px);
  padding: 12px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(24, 24, 24, 0.4);
  overflow: hidden;
}

@media (max-width: 900px) {
  .provider {
    grid-template-columns: 1fr;
  }

  .provider__profile {
    grid-template-columns: 130px minmax(0, 1fr);
  }
}

@media (max-width: 620px) {
  .recommended-services-page__header {
    align-items: flex-start;
  }

  .provider {
    padding: 14px;
  }

  .provider__profile {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .provider__spotlight {
    width: 150px;
    margin: 0 auto;
  }

  .provider__services,
  .provider__contact {
    justify-content: center;
  }

  .provider__carousel {
    height: 420px;
  }
}
</style>
