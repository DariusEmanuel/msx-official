<script setup lang="ts">
import { computed } from "vue";

type HeadingTag = "h1" | "h2" | "h3";

const props = withDefaults(
  defineProps<{
    title: string;
    beforeText?: string;
    fontSize?: string;
    lineHeight?: string;
    fontSizeSpan?: string;
    lineHeightSpan?: string;
    as?: HeadingTag;
  }>(),
  {
    beforeText: "",
    fontSize: "60px",
    lineHeight: "55px",
    fontSizeSpan: "16px",
    lineHeightSpan: "20px",
    as: "h2",
  }
);

const cssProps = computed(() => ({
  "--before-content": `'${props.beforeText}'`,
  "--font-size": props.fontSize,
  "--line-height": props.lineHeight,
}));

const cssSpanProps = computed(() => ({
  "--span-font-size": props.fontSizeSpan,
  "--span-line-height": props.lineHeightSpan,
}));
</script>

<template>
  <section class="text-block">
    <component :is="props.as" class="text-block__title" :style="cssProps">
      {{ title }}
    </component>
    <p class="text-block__subtitle" :style="cssSpanProps">
      <slot></slot>
    </p>
  </section>
</template>

<style lang="scss">
.text-block {
  text-align: center;
  padding: 20px 10px;
  margin-top: 20px;
}

.text-block__title {
  color: rgba(255, 255, 255, 0.2);
  position: relative;
  text-transform: uppercase;
  font: normal normal bold var(--font-size) / var(--line-height) GalvjiBold;
  /* Avoid horizontal overflow on mobile (flex titles + large font-size can force sideways scroll) */
  display: block;
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: break-word;

  &::before {
    content: var(--before-content);
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
}

.text-block__subtitle {
  color: white;
  font-weight: bold;
  font: normal normal bold var(--span-font-size) / var(--span-line-height)
    GalvjiBold;
}
</style>
