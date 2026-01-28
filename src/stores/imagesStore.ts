import { defineStore } from "pinia";
import { ref } from "vue";

export interface Image {
  link?: string;
  text?: string;
  url: string;
  alt: string;
}

export const useImagesStore = defineStore("images", () => {
  const socialLinks = ref<Image[]>([
    {
      link: "https://www.facebook.com/MateiSaxMusic",
      url: new URL(`/src/assets/icon-facebook.png`, import.meta.url).href,
      alt: "Follow Matei Sax on Facebook",
    },
    {
      link: "https://www.instagram.com/matei.sax/",
      url: new URL("/src/assets/icon-instagram.png", import.meta.url).href,
      alt: "Follow Matei Sax on Instagram",
    },
    {
      link: "https://open.spotify.com/artist/11O4kxlEb8Q2cMBePFXUGC",
      url: new URL("/src/assets/icon-spotify.png", import.meta.url).href,
      alt: "Listen to Matei Sax on Spotify",
    },
    {
      link: "https://www.youtube.com/@mateisax",
      url: new URL("/src/assets/icon-youtube.png", import.meta.url).href,
      alt: "Subscribe to the Matei Sax YouTube channel",
    },
  ]);

  // const imagesUnderBio = ref<Image[]>(
  //   Array.from({ length: 10 }, (_, i) => ({
  //     url: new URL(`/src/assets/underBio/image${i + 1}.jpg`, import.meta.url)
  //       .href,
  //     alt: "Image Carousel",
  //   }))
  // );

  const imagesUnderBio = ref<Image[]>(
    [
      "Untold2025_810_22626_MBA01119_MB.jpg",
      "B9FEBD24-24C0-401B-A1A9-AE0F1A6D4AFC.jpeg",
      "Untold2025_0810_020200_9292_AAX.jpg",
      "5cb39336-8ccd-4509-a0c8-705993c399cf.JPG",
      "C2FD439E-6821-41F1-A418-DE91973A96C5.jpeg",
      "image10.jpg",
      "NKT08797.jpg",
      "DEE0FEEF-CA9D-4FA5-85E7-1AF4A2D72B5B.jpeg",
      "NKT08386.JPG",
      "image7.jpg",
      "image8.jpg",
      "image9.jpg",
    ].map((filename) => ({
      url: new URL(`/src/assets/underBio/${filename}`, import.meta.url).href,
      alt: "Matei Sax performance photo",
    }))
  );

  const imagesUnderLiveShows = ref<Image[]>(
    [
      "12e7ab11-9349-48fc-9961-3c4a2958bccc.JPG",
      "b7240ef4-a2f5-41c0-9cf0-284e73f5260b.JPG",
      // "5b2e182c-4e30-450a-bc95-416752d533fc.JPG",
      "6ba66f81-a082-4a65-8a88-b393c5267aed.JPG",
      "766613d5-15bc-408d-af72-7c8930c4cfa2.JPG",
      "8942845c-d140-4de5-b257-7c281ced6a8c.JPG",
      "9ae67d47-c980-4a22-a4d8-ac4a68b5dd18.JPG",
      "a02693cb-7c13-4f78-89d7-66821b9e10bd.JPG",
      // "f5cae22b-6632-456c-a163-6ea6848904fb.JPG",
      "SXV_9283.jpg",
      "SXV_9313.jpg",
      // "2148f114-fd73-4d21-87ca-c28a17bef4e2.JPG",
    ].map((filename) => ({
      url: new URL(`/src/assets/liveShows/${filename}`, import.meta.url).href,
      alt: "Matei Sax live show photo",
    }))
  );

  const collaborations = ref<Image[]>([
    {
      url: new URL(`/src/assets/collabs/untold.jpg`, import.meta.url).href,
      alt: "Untold Matei Sax",
      text: "Untold Festival",
    },
    {
      url: new URL(`/src/assets/collabs/electric-castle.jpg`, import.meta.url).href,
      alt: "Electric Castle Matei Sax",
      text: "Electric Castle",
    },
    {
      url: new URL(`/src/assets/collabs/cdj.jpg`, import.meta.url).href,
      alt: "CDJ Matei Sax",
      text: "CDj Record Label",
    },
    {
      url: new URL(`/src/assets/collabs/purcari.jpg`, import.meta.url).href,
      alt: "Purcari Matei Sax",
      text: "Purcari",
    },

    {
      url: new URL(`/src/assets/collabs/cafe-de-anatolia.jpg`, import.meta.url).href,
      alt: "Cafe de Anatolia Matei Sax",
      text: "Cafe de Anatolia",
    },
    {
      url: new URL(`/src/assets/collabs/anda-adam.jpeg`, import.meta.url).href,
      alt: "Anda Adam Matei Sax",
      text: "Anda Adam",
    },
    // {
    //   url: new URL(`/src/assets/collabs/nazalio.jpeg`, import.meta.url).href,
    //   alt: "Nazalio Fortes Matei Sax",
    //   text: "Nazalio Fortes",
    // },
    // {
    //   url: new URL(`/src/assets/collabs/batique.jpeg`, import.meta.url).href,
    //   alt: "Batique Matei Sax",
    //   text: "Batique",
    // },
    {
      url: new URL(`/src/assets/collabs/dos-santos.jpeg`, import.meta.url).href,
      alt: "Banto dos Santos Matei Sax",
      text: "Banto dos Santos",
    },
    {
      url: new URL(
        `/src/assets/collabs/euphoria-music-hall.jpeg`,
        import.meta.url
      ).href,
      alt: "Euphoria Music Hall Matei Sax | Euphoria Music Hall Sax Performance",
      text: "Euphoria Music Hall",
    },
    {
      url: new URL(`/src/assets/collabs/hillhouse.jpeg`, import.meta.url).href,
      alt: "Hillhouse Matei Sax | HillHouse Sax Performance",
      text: "Hillhouse",
    },
    {
      url: new URL(
        `/src/assets/collabs/las-cuevas-de-los-rajas.jpeg`,
        import.meta.url
      ).href,
      alt: "Lass Cuevas de Los Rajas Icon Sax Event",
      text: "Las Cuevas de Los Rajas",
    },
    {
      url: new URL(
        `/src/assets/collabs/after-eight-coktail-club.jpeg`,
        import.meta.url
      ).href,
      alt: "Events By Chios Sax Performance | Matei Sax",
      text: "After Eight",
    },
  ]);

  return {
    socialLinks,
    imagesUnderBio,
    collaborations,
    imagesUnderLiveShows
  };
});
