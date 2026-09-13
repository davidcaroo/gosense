import React from 'react';
import {
  AbsoluteFill,
  Series,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { SCENE_DURATIONS, THEME_COLORS, SANS_FONT } from './constants';
import { Scene1Intro } from './scenes/Scene1Intro';
import { Scene2HeroHeader } from './scenes/Scene2HeroHeader';
import { Scene3PromoCards } from './scenes/Scene3PromoCards';
import { Scene4ProductGrids } from './scenes/Scene4ProductGrids';
import { Scene5EditorialMosaic } from './scenes/Scene5EditorialMosaic';
import { Scene6ProductDetail } from './scenes/Scene6ProductDetail';
import { Scene7CartDrawer } from './scenes/Scene7CartDrawer';
import { Scene8Outro } from './scenes/Scene8Outro';

export const ThemePresentation: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Global video progress (0 to 100%)
  const progressPercent = (frame / (durationInFrames - 1)) * 100;

  return (
    <AbsoluteFill style={{ backgroundColor: THEME_COLORS.bg }}>
      <Series>
        {/* 01. Intro & Concept */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.intro}>
          <Scene1Intro />
        </Series.Sequence>

        {/* 02. Header & Hero Section */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.heroHeader}>
          <Scene2HeroHeader />
        </Series.Sequence>

        {/* 03. 3 Promotional Cards */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.promoCards}>
          <Scene3PromoCards />
        </Series.Sequence>

        {/* 04. Product Grid & Card Architecture */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.productGrids}>
          <Scene4ProductGrids />
        </Series.Sequence>

        {/* 05. Editorial Collection Mosaic */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.editorialMosaic}>
          <Scene5EditorialMosaic />
        </Series.Sequence>

        {/* 06. Product Detail Page Experience */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.productDetail}>
          <Scene6ProductDetail />
        </Series.Sequence>

        {/* 07. Interactive Ajax Cart Drawer */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.cartDrawer}>
          <Scene7CartDrawer />
        </Series.Sequence>

        {/* 08. Specs & Outro */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.outro}>
          <Scene8Outro />
        </Series.Sequence>
      </Series>

      {/* Global Presentation Progress Bar at the very bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          zIndex: 999,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            backgroundColor: THEME_COLORS.dark,
            transition: 'width 0.1s linear',
          }}
        />
      </div>

      {/* Subtle Brand Watermark (Top Right) */}
      <div
        style={{
          position: 'absolute',
          top: 24,
          right: 32,
          fontFamily: SANS_FONT,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.3)',
          zIndex: 999,
          pointerEvents: 'none',
        }}
      >
        GoSense • Theme Showcase
      </div>
    </AbsoluteFill>
  );
};
