import React from 'react';
import { Composition } from 'remotion';
import { ThemePresentation } from './ThemePresentation';
import { FPS, TOTAL_FRAMES, SCENE_DURATIONS } from './constants';
import { Scene1Intro } from './scenes/Scene1Intro';
import { Scene2HeroHeader } from './scenes/Scene2HeroHeader';
import { Scene3PromoCards } from './scenes/Scene3PromoCards';
import { Scene4ProductGrids } from './scenes/Scene4ProductGrids';
import { Scene5EditorialMosaic } from './scenes/Scene5EditorialMosaic';
import { Scene6ProductDetail } from './scenes/Scene6ProductDetail';
import { Scene7CartDrawer } from './scenes/Scene7CartDrawer';
import { Scene8Outro } from './scenes/Scene8Outro';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 1. Main Full Presentation (1920x1080 Full HD, ~58 seconds) */}
      <Composition
        id="ThemePresentation"
        component={ThemePresentation}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
      />

      {/* 2. Individual Scene Compositions for quick inspection */}
      <Composition
        id="01-Intro"
        component={Scene1Intro}
        durationInFrames={SCENE_DURATIONS.intro}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="02-HeroHeader"
        component={Scene2HeroHeader}
        durationInFrames={SCENE_DURATIONS.heroHeader}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="03-PromoCards"
        component={Scene3PromoCards}
        durationInFrames={SCENE_DURATIONS.promoCards}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="04-ProductGrids"
        component={Scene4ProductGrids}
        durationInFrames={SCENE_DURATIONS.productGrids}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="05-EditorialMosaic"
        component={Scene5EditorialMosaic}
        durationInFrames={SCENE_DURATIONS.editorialMosaic}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="06-ProductDetail"
        component={Scene6ProductDetail}
        durationInFrames={SCENE_DURATIONS.productDetail}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="07-CartDrawer"
        component={Scene7CartDrawer}
        durationInFrames={SCENE_DURATIONS.cartDrawer}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="08-Outro"
        component={Scene8Outro}
        durationInFrames={SCENE_DURATIONS.outro}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
