<script setup>
import { useReferencesStore } from "@/stores/referencesStore";

const referencesStore = useReferencesStore();
</script>

<template>
  <footer class="footer">
    <div class="footer__references">
      <details class="footer__accordion">
        <summary class="footer__accordion-summary">
          <h6 class="footer__title">Valuable References</h6>
          <span class="footer__accordion-icon" aria-hidden="true"></span>
        </summary>

        <div class="footer__accordion-content">
          <div class="footer__wrapper">
            <div
              v-for="(category, key) in referencesStore.footerReferences"
              :key="key"
              class="footer__category"
            >
              <h6 class="footer__category-title">{{ category.title }}</h6>
              <ul class="footer__list">
                <li
                  v-for="(item, index) in category.links"
                  :key="index"
                  class="footer__list-item"
                >
                  <a
                    :href="item.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="footer__link"
                  >
                    {{ item.text }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </details>
    </div>
    <div class="footer__reserved">
      <img
        class="footer__logo"
        src="../../assets/msx-logo.png"
        alt="Matei Sax - MSX production"
        loading="lazy"
      />
      <p class="footer__reserved-text">All rights reserved®</p>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  width: 100%;
  background-color: rgb(24, 24, 24, 0.5);
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Galvji;

  &__title {
    text-transform: uppercase;
    font-size: 14px;
    text-align: left;
    font-family: GalvjiBold;
  }

  &__references {
    width: 100%;
    align-self: stretch;
    padding: 0 20px;
    box-sizing: border-box;
  }

  &__accordion {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    background: rgba(24, 24, 24, 0.35);
    overflow: hidden;
  }

  &__accordion-summary {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 14px;
    cursor: pointer;
    user-select: none;
  }

  &__accordion-summary::-webkit-details-marker {
    display: none;
  }

  &__accordion-icon {
    width: 10px;
    height: 10px;
    border-right: 2px solid rgba(255, 255, 255, 0.65);
    border-bottom: 2px solid rgba(255, 255, 255, 0.65);
    transform: rotate(45deg);
    transition: transform 0.2s ease;
    flex: 0 0 auto;
  }

  &__accordion[open] &__accordion-icon {
    transform: rotate(-135deg);
  }

  &__accordion-content {
    padding: 0 14px 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 14px;
  }

  &__category {
    &-title {
      font-size: 1rem;
      text-transform: uppercase;
      text-align: left;
    }
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;

    list-style-position: inside;
    &-item {
      text-align: left;
      margin: 5px 0;
      padding: 0 0 0 20px;
      background: url("@/assets/icon-external-link.svg") no-repeat left center;
      background-size: 12px;
    }
  }

  &__link {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.2s ease;
  }

  &__link:hover,
  &__link:focus-visible {
    color: rgba(255, 255, 255, 0.95);
  }

  &__reserved {
    padding: 20px 20px 70px;
    width: 100%;
    text-align: center;
  }

  &__logo {
    width: 100px;
  }
}
</style>
