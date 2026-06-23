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
          alt: "Cezara blonde bridal makeup portrait",
        },
        {
          url: asset("recommended-services/cezara-carousel-5.png"),
          alt: "Cezara blonde bridal makeup with shimmer eyeshadow",
        },
        {
          url: asset("recommended-services/cezara-carousel-6.png"),
          alt: "Cezara soft glam makeup editorial portrait",
        },
      ],
      contacts: [
        { label: "Instagram", value: "@cezaraadam.makeupartist", href: "https://www.instagram.com/cezaraadam.makeupartist/" },
        { label: "Phone", value: "+40 749 969 659", href: "tel:+40749969659" },
        { label: "Email", value: "Cezaraa.Adam@gmail.com", href: "mailto:Cezaraa.Adam@gmail.com" },
      ],
    },
    // {
    //   id: "darius-shutterbug-photography",
    //   name: "Darius",
    //   brand: "Darius Shutterbug Photography",
    //   services: ["Event photography", "Portrait sessions", "Brand shoots"],
    //   description:
    //     "Placeholder description for a photographer capturing live moments, artist portraits, and polished visual stories for brands.",
    //   spotlightImages: [
    //     {
    //       url: asset("liveShows/SXV_9283.jpg"),
    //       alt: "Placeholder portrait for Darius Shutterbug Photography",
    //     },
    //     {
    //       url: asset("logo.svg"),
    //       alt: "Placeholder logo for Darius Shutterbug Photography",
    //     },
    //   ],
    //   galleryImages: [
    //     {
    //       url: asset("liveShows/12e7ab11-9349-48fc-9961-3c4a2958bccc.JPG"),
    //       alt: "Placeholder photography portfolio image",
    //     },
    //     {
    //       url: asset("liveShows/6ba66f81-a082-4a65-8a88-b393c5267aed.JPG"),
    //       alt: "Placeholder event photography image",
    //     },
    //     {
    //       url: asset("liveShows/SXV_9313.jpg"),
    //       alt: "Placeholder portrait photography image",
    //     },
    //   ],
    //   contacts: [
    //     { label: "Instagram", value: "@darius.shutterbug.placeholder", href: "https://instagram.com/" },
    //     { label: "Phone", value: "+40 700 000 002", href: "tel:+40700000002" },
    //     { label: "Email", value: "darius@example.com", href: "mailto:darius@example.com" },
    //   ],
    // },
    // {
    //   id: "valentina-valart-dancing-school",
    //   name: "Valentina",
    //   brand: "ValArt Dancing School",
    //   services: ["Dance classes", "Wedding dance", "Private choreography"],
    //   description:
    //     "Placeholder description for a dance school offering expressive classes, custom choreography, and memorable wedding moments.",
    //   spotlightImages: [
    //     {
    //       url: asset("collabs/electric-castle.jpg"),
    //       alt: "Placeholder portrait for Valentina from ValArt Dancing School",
    //     },
    //     {
    //       url: asset("logo.svg"),
    //       alt: "Placeholder logo for ValArt Dancing School",
    //     },
    //   ],
    //   galleryImages: [
    //     {
    //       url: asset("collabs/untold.jpg"),
    //       alt: "Placeholder dance school image",
    //     },
    //     {
    //       url: asset("collabs/euphoria-music-hall.jpeg"),
    //       alt: "Placeholder choreography image",
    //     },
    //     {
    //       url: asset("collabs/hillhouse.jpeg"),
    //       alt: "Placeholder performance dance image",
    //     },
    //   ],
    //   contacts: [
    //     { label: "Instagram", value: "@valart.dance.placeholder", href: "https://instagram.com/" },
    //     { label: "Phone", value: "+40 700 000 003", href: "tel:+40700000003" },
    //     { label: "Email", value: "valart@example.com", href: "mailto:valart@example.com" },
    //   ],
    // },
  ]);

  return { providers };
});
