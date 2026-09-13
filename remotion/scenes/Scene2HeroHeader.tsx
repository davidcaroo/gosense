import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from 'remotion';
import { THEME_COLORS, EDITORIAL_FONT, SANS_FONT } from '../constants';
import { BrowserFrame } from '../components/BrowserFrame';
import { Badge } from '../components/Badge';

export const Scene2HeroHeader: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const windowProgress = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 80 },
  });

  // Callout pop in
  const calloutProgress = spring({
    frame: frame - 25,
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 90 },
  });

  const windowScale = interpolate(windowProgress, [0, 1], [0.93, 1]);
  const windowOpacity = interpolate(windowProgress, [0, 1], [0, 1]);
  const windowY = interpolate(windowProgress, [0, 1], [50, 0]);

  // Announcement bar animation (swaps text at frame 110)
  const isSecondAnnouncement = frame > 110;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME_COLORS.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: SANS_FONT,
        padding: '30px 40px',
      }}
    >
      {/* Top Section Title & Indicator */}
      <div
        style={{
          width: '100%',
          maxWidth: 1520,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Badge text="01 • Header & Hero" />
          <h2
            style={{
              margin: 0,
              fontSize: 26,
              fontFamily: EDITORIAL_FONT,
              fontWeight: 600,
              color: THEME_COLORS.dark,
            }}
          >
            Announcement Bar Dinámica & Hero Principal
          </h2>
        </div>
        <span style={{ fontSize: 14, color: THEME_COLORS.textMuted, fontWeight: 500 }}>
          Sección totalmente editable desde el Personalizador de Shopify
        </span>
      </div>

      {/* Browser View */}
      <div
        style={{
          opacity: windowOpacity,
          transform: `scale(${windowScale}) translateY(${windowY}px)`,
        }}
      >
        <BrowserFrame url="https://gosense.co" width={1520} height={820}>
          {/* 1. Announcement Bar */}
          <div
            style={{
              backgroundColor: '#111111',
              color: '#F7F6F2',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.4px',
              padding: '10px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <span style={{ transition: 'all 0.3s ease' }}>
              {isSecondAnnouncement
                ? '⚡ 15% OFF en tu primera compra con el código GOSENSE15'
                : '🇨🇴 ¡Envíos gratis a toda Colombia por compras superiores a $150.000!'}
            </span>
          </div>

          {/* 2. Header / Nav */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderBottom: `1px solid ${THEME_COLORS.border}`,
              padding: '16px 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
              <span
                style={{
                  fontFamily: EDITORIAL_FONT,
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: '-0.5px',
                  color: THEME_COLORS.dark,
                }}
              >
                GoSense
              </span>

              <div style={{ display: 'flex', gap: 28, fontSize: 14, fontWeight: 500, color: '#333' }}>
                <span style={{ color: THEME_COLORS.dark, fontWeight: 600, borderBottom: '2px solid #111', paddingBottom: 4 }}>Sneakers</span>
                <span>Hombre</span>
                <span>Niños</span>
                <span>Accesorios</span>
                <span>Colecciones</span>
                <span>Nosotros</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              {/* Search Icon */}
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              {/* User Account */}
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {/* Cart Icon with badge */}
              <div style={{ position: 'relative' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span
                  style={{
                    position: 'absolute',
                    top: -7,
                    right: -9,
                    backgroundColor: THEME_COLORS.dark,
                    color: '#FFF',
                    borderRadius: 999,
                    fontSize: 10,
                    fontWeight: 700,
                    width: 17,
                    height: 17,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  2
                </span>
              </div>
            </div>
          </div>

          {/* 3. Custom Home Hero Banner */}
          <div style={{ padding: '24px 48px', position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 20,
                overflow: 'hidden',
                height: 570,
                backgroundColor: '#1E1E1E',
                boxShadow: '0 12px 35px rgba(0,0,0,0.1)',
              }}
            >
              {/* Background Image */}
              <Img
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1800&auto=format&fit=crop"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.78)',
                }}
              />

              {/* Gradient Overlay for text readability */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)',
                }}
              />

              {/* Hero Copy */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: 64,
                  transform: 'translateY(-50%)',
                  maxWidth: 640,
                  color: '#FFFFFF',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                    padding: '6px 14px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: 18,
                  }}
                >
                  Colección 2026
                </div>

                <h1
                  style={{
                    fontFamily: EDITORIAL_FONT,
                    fontSize: 54,
                    fontWeight: 500,
                    lineHeight: 1.12,
                    margin: '0 0 18px 0',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Zapatillas que<br />
                  desafían tu estilo<br />
                  diario
                </h1>

                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.6,
                    color: '#E0E0DC',
                    margin: '0 0 30px 0',
                    maxWidth: 500,
                  }}
                >
                  Calzado confeccionado con siluetas audaces, soporte reactivo y una estética atemporal para acompañar tu ritmo.
                </p>

                <div style={{ display: 'flex', gap: 14 }}>
                  <button
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#111111',
                      padding: '14px 34px',
                      borderRadius: 999,
                      border: 'none',
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: 'pointer',
                      letterSpacing: '0.4px',
                    }}
                  >
                    Comprar Ahora
                  </button>
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255,255,255,0.4)',
                      padding: '14px 28px',
                      borderRadius: 999,
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    Explorar Lookbook
                  </button>
                </div>
              </div>

              {/* Slider Dots */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 24,
                  right: 36,
                  display: 'flex',
                  gap: 8,
                }}
              >
                <div style={{ width: 28, height: 8, borderRadius: 4, backgroundColor: '#FFFFFF' }} />
                <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.4)' }} />
                <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.4)' }} />
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>

      {/* Floating Feature Highlights */}
      <div
        style={{
          position: 'absolute',
          bottom: 35,
          display: 'flex',
          gap: 20,
          opacity: interpolate(calloutProgress, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(calloutProgress, [0, 1], [20, 0])}px)`,
        }}
      >
        <div
          style={{
            backgroundColor: '#111111',
            color: '#FFFFFF',
            padding: '10px 20px',
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 500,
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#27C93F' }} />
          <span>Carrusel multi-slide integrado en Liquid</span>
        </div>

        <div
          style={{
            backgroundColor: '#111111',
            color: '#FFFFFF',
            padding: '10px 20px',
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 500,
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#27C93F' }} />
          <span>Sticky Header con contador Ajax reactivo</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
