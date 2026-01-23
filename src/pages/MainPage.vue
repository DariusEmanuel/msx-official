<script setup lang="ts">
// landing
import LandingHero from "@/components/LandingHero.vue";

// sections
import BioSection from "@/components/sections/BioSection.vue";
import ListenSection from "@/components/sections/ListenSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import LiveShowsSection from "@/components/sections/LiveShowsSection.vue";
import BookingFormSection from "@/components/sections/BookingFormSection.vue";
import CollaborationsSection from "@/components/sections/CollaborationsSection.vue";
import PlatformsSection from "@/components/sections/PlatformsSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
</script>

<template>
  <landing-hero />
  <main>
    <bio-section />
    <listen-section />
    <about-section />
    <live-shows-section />
    <booking-form-section />
    <collaborations-section />
    <platforms-section />
  </main>
  <footer-section />
</template>

<style>
main {
  /* this is temporar */
  margin-bottom: 200px;
}
</style>
