export const THEME_COLORS = {
  bg: '#F7F6F2',
  cardBg: '#FFFFFF',
  cardBgMuted: '#F3F3F1',
  dark: '#111111',
  charcoal: '#242424',
  text: '#151515',
  textMuted: '#666666',
  border: '#DEDEDA',
  borderDark: '#2B2B2B',
  accent: '#D8D5CE',
  badgeBg: '#111111',
  badgeText: '#FFFFFF',
  saleBadgeBg: '#2A2A2A',
  saleBadgeText: '#F7F6F2',
  white: '#FFFFFF',
};

export const FPS = 30;

export const SCENE_DURATIONS = {
  intro: 180,           // 6s
  heroHeader: 240,      // 8s
  promoCards: 210,      // 7s
  productGrids: 240,    // 8s
  editorialMosaic: 240, // 8s
  productDetail: 240,   // 8s
  cartDrawer: 210,      // 7s
  outro: 180,           // 6s
};

export const TOTAL_FRAMES =
  SCENE_DURATIONS.intro +
  SCENE_DURATIONS.heroHeader +
  SCENE_DURATIONS.promoCards +
  SCENE_DURATIONS.productGrids +
  SCENE_DURATIONS.editorialMosaic +
  SCENE_DURATIONS.productDetail +
  SCENE_DURATIONS.cartDrawer +
  SCENE_DURATIONS.outro; // 1740 frames = 58 seconds

export const EDITORIAL_FONT =
  "'Playfair Display', 'Georgia', 'Times New Roman', serif";
export const SANS_FONT =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
