import { defineStore } from "pinia";
import { reactive } from "vue";

export const useReferencesStore = defineStore("references", () => {
  const footerReferences = reactive({
    platforms: {
      title: "Other Platforms",
      links: [
        {
          text: "Apple Music",
          url: "https://music.apple.com/us/artist/matei-sax/1457435802",
        },
        {
          text: "BeatPort",
          url: "https://www.beatport.com/artist/matei-sax/1109152",
        },
        { text: "UrleBird", url: "https://urlebird.com/user/matei.sax/" },
        { text: "Boomplay", url: "https://www.boomplay.com/artists/53771256" },
      ],
    },
    interviews: {
      title: "Interviews",
      links: [
        {
          text: "Exclusive interview for Radio Cluj",
          url: "http://www.radiocluj.ro/2022/06/18/matei-sax-e-mai-degraba-ca-o-extensie-a-corpului-saxofonul-face-parte-din-mine-foto/",
        },
        {
          text: "Exclusive interview for Cluj24",
          url: "https://cluj24.ro/video-exclusiv-cine-e-saxofonistul-care-a-cantat-jazz-pe-skateboard-pe-strazile-clujului-62696.html",
        },
      ],
    },
    newsCitations: {
      title: "News Citations",
      links: [
        {
          text: "Un Vampiro Tenerife Sur",
          url: "https://www.soldelsurtenerife.com/articulo/cultura1/vampiro-sur-tenerife/20240202144246079927.html"
        },
        {
          text: "Prima TV Sport",
          url: "https://www.youtube.com/watch?v=HyPlaJo5kCw",
        },
        {
          text: "Kanal D",
          url: "https://www.stirilekanald.ro/concert-de-saxofon-pe-skateboard-20149110",
        },
        {
          text: "Via Cluj",
          url: "https://viacluj.tv/cu-skateboard-ul-si-saxofonul-pe-strazile-din-cluj-napoca/",
        },
        {
          text: "TIFF - Art Museum Edition",
          url: "https://tiff.ro/en/tiff/stiri/bt-live-sessions-art-museum-edition",
        },
        {
          text: "Monitorul Cluj",
          url: "https://www.monitorulcj.ro/monitorul-cartierelor/90397-video-un-tanar-se-plimba-cu-skateboardul-prin-cluj-napoca-si-canta-la-saxofon-i-a-incantat-pe-clujeni",
        },
      ],
    },
    artistCitations: {
      title: "Artists Citations",
      links: [
        {
          text: "Andreea Olariu Music",
          url: "https://www.andreeaolariumusic.com/saxofon/",
        },
        {
          text: "Event Master",
          url: "https://event-master.ro/instrumentisti/",
        },
      ],
    },
    horecaCitations: {
      title: "Horeca Citations",
      links: [
        {
          text: "Samsara Foodhouse",
          url: "https://clujlife.com/2023/03/02/sarbatoreste-8-martie-cu-o-seara-muzicala-de-saxofon-la-samsara-foodhouse/",
        },
        {
          text: "CHIOS Cluj",
          url: "https://www.chios.ro/event/chios-socializing-friday-matei-sax-samitone-boddo/",
        },
        {
          text: "The Trumpets",
          url: "https://iasi.inoras.ro/events/matei-sax-live-jazz-the-trumpets-05-05/",
        },
      ],
    },
  });

  return {
    footerReferences,
  };
});
