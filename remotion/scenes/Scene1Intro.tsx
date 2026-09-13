import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { THEME_COLORS, EDITORIAL_FONT, SANS_FONT } from '../constants';
import { Badge } from '../components/Badge';

export const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 90 },
  });

  const subtitleProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 85 },
  });

  const cardsProgress = spring({
    frame: frame - 30,
    fps,
    config: { damping: 15, mass: 0.8, stiffness: 100 },
  });

  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);
  const titleY = interpolate(titleProgress, [0, 1], [40, 0]);

  const subOpacity = interpolate(subtitleProgress, [0, 1], [0, 1]);
  const subY = interpolate(subtitleProgress, [0, 1], [25, 0]);

  const cardsOpacity = interpolate(cardsProgress, [0, 1], [0, 1]);
  const cardsScale = interpolate(cardsProgress, [0, 1], [0.95, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME_COLORS.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: SANS_FONT,
        color: THEME_COLORS.text,
        padding: 80,
      }}
    >
      {/* Background subtle watermark texture */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 340,
          fontFamily: EDITORIAL_FONT,
          fontWeight: 700,
          color: 'rgba(0, 0, 0, 0.025)',
          letterSpacing: '-8px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        GOSENSE
      </div>

      {/* Main Content Box */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 1100,
          zIndex: 2,
        }}
      >
        {/* Top Tag */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 24,
          }}
        >
          <Badge text="Shopify Sense Theme • Edición Editorial" />
        </div>

        {/* Main Serif Headline */}
        <h1
          style={{
            fontFamily: EDITORIAL_FONT,
            fontSize: 78,
            lineHeight: 1.08,
            fontWeight: 500,
            color: THEME_COLORS.dark,
            margin: 0,
            letterSpacing: '-1.5px',
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Sneakers Que Desafían<br />
          <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
            Tu Estilo Diario
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: SANS_FONT,
            fontSize: 22,
            lineHeight: 1.6,
            color: THEME_COLORS.textMuted,
            marginTop: 26,
            maxWidth: 820,
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
          }}
        >
          Una experiencia de e-commerce minimalista y de alto impacto inspirada en
          el diseño editorial, arquitectura modular de Shopify OS 2.0 y rendimiento ultra rápido.
        </p>

        {/* Feature Pills */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 40,
            opacity: cardsOpacity,
            transform: `scale(${cardsScale})`,
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: `1px solid ${THEME_COLORS.border}`,
              padding: '14px 28px',
              borderRadius: 12,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span style={{ fontSize: 13, textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>Arquitectura</span>
            <strong style={{ fontSize: 18, color: THEME_COLORS.dark }}>Shopify OS 2.0</strong>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: `1px solid ${THEME_COLORS.border}`,
              padding: '14px 28px',
              borderRadius: 12,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span style={{ fontSize: 13, textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>Diseño</span>
            <strong style={{ fontSize: 18, color: THEME_COLORS.dark }}>Editorial & Minimal</strong>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: `1px solid ${THEME_COLORS.border}`,
              padding: '14px 28px',
              borderRadius: 12,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span style={{ fontSize: 13, textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>Conversión</span>
            <strong style={{ fontSize: 18, color: THEME_COLORS.dark }}>Ajax Cart Drawer</strong>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: `1px solid ${THEME_COLORS.border}`,
              padding: '14px 28px',
              borderRadius: 12,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span style={{ fontSize: 13, textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>Secciones</span>
            <strong style={{ fontSize: 18, color: THEME_COLORS.dark }}>100% Personalizables</strong>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
