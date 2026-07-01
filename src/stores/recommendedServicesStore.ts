import { defineStore } from "pinia";
import { ref } from "vue";
import type { Image } from "@/stores/imagesStore";

export interface RecommendedServiceContact {
  label: string;
  value: string;
  href?: string;
}

export interface RecommendedServiceProvider {
  id: string;
  name: string;
  brand: string;
  services: string[];
  description: string;
  spotlightImages: Image[];
  galleryImages: Image[];
  contacts: RecommendedServiceContact[];
}

const imageAssets = import.meta.glob<string>("/src/assets/**/*", {
  eager: true,
  import: "default",
  query: "?url",
});

const asset = (path: string) => {
  const url = imageAssets[`/src/assets/${path}`];

  if (!url) {
    throw new Error(`Missing recommended service asset: ${path}`);
  }

  return url;
};

export const useRecommendedServicesStore = defineStore("recommendedServices", () => {
  const providers = ref<RecommendedServiceProvider[]>([
    {
      id: "cezara-makeup-artist",
      name: "Cezara",
      brand: "Cezara Adam Make-up Artist",
      services: ["Bridal makeup", "Event makeup", "Editorial glam"],
      description:
        "Placeholder description for a makeup artist focused on elegant looks for weddings, private events, and photoshoots.",
      spotlightImages: [
        {
          url: asset("recommended-services/cezara-makeup-artist-picture.png"),
          alt: "Cezara Makeup Artist portrait",
        },
        {
          url: asset("recommended-services/cezara-makeup-artist-logo.png"),
          alt: "Cezara Makeup Artist logo",
        },
      ],
      galleryImages: [
        {
          url: asset("recommended-services/cezara-carousel-1.png"),
          alt: "Cezara bridal makeup portrait",
        },
        {
          url: asset("recommended-services/cezara-carousel-2.png"),
          alt: "Cezara bridal makeup close-up",
        },
        {
          url: asset("recommended-services/cezara-carousel-3.png"),
          alt: "Cezara bridal makeup seated portrait",
        },
        {
          url: asset("recommended-services/cezara-carousel-4.png"),
          alt: "Cezara bridal makeup look",
        },
        {
          url: asset("recommended-services/cezara-carousel-5.png"),
          alt: "Cezara event makeup portrait",
        },
        {
          url: asset("recommended-services/cezara-carousel-6.png"),
          alt: "Cezara makeup portfolio portrait",
        },
      ],
      contacts: [
        { label: "Instagram", value: "@cezaraadam.makeupartist", href: "https://www.instagram.com/cezaraadam.makeupartist/" },
        { label: "Phone", value: "+40 749 969 659", href: "tel:+40749969659" },
        { label: "Email", value: "Cezaraa.Adam@gmail.com", href: "mailto:Cezaraa.Adam@gmail.com" },
      ],
    },
    {
      id: "valentina-valart-dancing-school",
      name: "Valentina",
      brand: "ValArt | Art of dance",
      services: ["Wedding dances", "Bachata", "Private classes"],
      description:
        "Dance school focused on wedding dances, bachata lessons, and private classes for couples and event guests.",
      spotlightImages: [
        {
          url: asset("recommended-services/valart-picture.png"),
          alt: "Valentina from ValArt Dance School",
        },
        {
          url: asset("recommended-services/valart-logo.png"),
          alt: "ValArt Dance School logo",
        },
      ],
      galleryImages: [],
      contacts: [
        { label: "Instagram", value: "@valart.dance", href: "https://www.instagram.com/valart.dance/" },
        { label: "Instagram", value: "@popvalentina", href: "https://www.instagram.com/popvalentina/" },
        { label: "Phone", value: "+40 742 161 373", href: "tel:+40742161373" },
      ],
    },
    {
      id: "darius-shutterbug-photography",
      brand: "Darius.shutterbug",
      services: ["Artist photographer", "Private events", "Concerts", "Brands"],
      description:
        "Photography for artists, private events, concerts, and brands, with a focus on expressive moments ✨",
      spotlightImages: [
        {
          url: asset("recommended-services/darius_shutterbug-image.jpg"),
          alt: "Darius Shutterbug Photography portrait",
        },
        {
          url: asset("recommended-services/darius.shutterbug-logo-transparent.png"),
          alt: "Darius Shutterbug Photography logo",
        },
      ],
      galleryImages: [
        {
          url: asset("recommended-services/darius-carousel-01.png"),
          alt: "Darius Shutterbug carousel image 1",
        },
        {
          url: asset("recommended-services/darius-carousel-02.png"),
          alt: "Darius Shutterbug carousel image 2",
        },
        {
          url: asset("recommended-services/darius-carousel-03.png"),
          alt: "Darius Shutterbug carousel image 3",
        },
        {
          url: asset("recommended-services/darius-carousel-04.png"),
          alt: "Darius Shutterbug carousel image 4",
        },
        {
          url: asset("recommended-services/darius-carousel-05.png"),
          alt: "Darius Shutterbug carousel image 5",
        },
        {
          url: asset("recommended-services/darius-carousel-06.png"),
          alt: "Darius Shutterbug carousel image 6",
        },
        {
          url: asset("recommended-services/darius-carousel-07.png"),
          alt: "Darius Shutterbug carousel image 7",
        },
        {
          url: asset("recommended-services/darius-carousel-08.png"),
          alt: "Darius Shutterbug carousel image 8",
        },
        {
          url: asset("recommended-services/darius-carousel-09.png"),
          alt: "Darius Shutterbug carousel image 9",
        },
        {
          url: asset("recommended-services/darius-carousel-10.png"),
          alt: "Darius Shutterbug carousel image 10",
        },
        {
          url: asset("recommended-services/darius-carousel-11.png"),
          alt: "Darius Shutterbug carousel image 11",
        },
        {
          url: asset("recommended-services/darius-carousel-12.png"),
          alt: "Darius Shutterbug carousel image 12",
        },
        {
          url: asset("recommended-services/darius-carousel-13.png"),
          alt: "Darius Shutterbug carousel image 13",
        },
        {
          url: asset("recommended-services/darius-carousel-14.png"),
          alt: "Darius Shutterbug carousel image 14",
        },
        {
          url: asset("recommended-services/darius-carousel-15.png"),
          alt: "Darius Shutterbug carousel image 15",
        },
        {
          url: asset("recommended-services/darius-carousel-16.png"),
          alt: "Darius Shutterbug carousel image 16",
        },
        {
          url: asset("recommended-services/darius-carousel-17.png"),
          alt: "Darius Shutterbug carousel image 17",
        },
        {
          url: asset("recommended-services/darius-carousel-18.png"),
          alt: "Darius Shutterbug carousel image 18",
        },
        {
          url: asset("recommended-services/darius-carousel-19.png"),
          alt: "Darius Shutterbug carousel image 19",
        },
        {
          url: asset("recommended-services/darius-carousel-20.png"),
          alt: "Darius Shutterbug carousel image 20",
        },
        {
          url: asset("recommended-services/darius-carousel-21.png"),
          alt: "Darius Shutterbug carousel image 21",
        },
      ],
      contacts: [
        { label: "Instagram", value: "@darius.shutterbug", href: "https://www.instagram.com/darius.shutterbug/" },
        { label: "Phone", value: "+40 758 617 869", href: "tel:+40758617869" },
      ],
    },
  ]);

  return { providers };
});
