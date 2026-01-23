<script setup>
import { useReferencesStore } from "@/stores/referencesStore";

const referencesStore = useReferencesStore();
</script>

<template>
  <footer class="footer">
    <div class="footer__references">
      <h6 class="footer__title">Valuable References</h6>
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
  max-width: 900px;
  width: 100%;
  padding-top: 40px;
  background-color: rgb(24, 24, 24, 0.5);
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Galvji;

  &__title {
    text-transform: uppercase;
    margin-bottom: 20px;
    font-size: 20px;
    text-align: left;
    font-family: GalvjiBold;
  }

  &__references {
    align-self: flex-start;
    margin-left: 20px;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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
