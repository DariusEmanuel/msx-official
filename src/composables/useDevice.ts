import { computed, onMounted, onUnmounted, ref } from "vue";

export type DeviceKind = "mobile" | "tablet" | "desktop";

export interface UseDeviceOptions {
  /**
   * Max width (px) considered "mobile".
   * Default aligns with the app's Swiper breakpoints: < 640px.
   */
  mobileMax: number;
  /**
   * Max width (px) considered "tablet".
   * Default aligns with the app's Swiper breakpoints: 640–1023px.
   */
  tabletMax: number;
}

export function useDevice(options: Partial<UseDeviceOptions> = {}) {
  const mobileMax = options.mobileMax ?? 639;
  const tabletMax = options.tabletMax ?? 1023;

  const width = ref<number>(typeof window !== "undefined" ? window.innerWidth : 0);

  const update = () => {
    width.value = window.innerWidth;
  };

  onMounted(() => {
    update();
    window.addEventListener("resize", update, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("resize", update);
  });

  const isMobile = computed(() => width.value <= mobileMax);
  const isTablet = computed(() => width.value > mobileMax && width.value <= tabletMax);
  const isDesktop = computed(() => width.value > tabletMax);

  const device = computed<DeviceKind>(() =>
    isDesktop.value ? "desktop" : isTablet.value ? "tablet" : "mobile"
  );

  return {
    width,
    isMobile,
    isTablet,
    isDesktop,
    device,
    breakpoints: { mobileMax, tabletMax },
  };
}

