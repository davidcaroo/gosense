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
import { Badge } from '../components/Badge';

const SAMPLE_PRODUCTS = [
  {
    title: 'Gaelic Indoor Shoes',
    price: '$219.96',
    badge: 'Nuevo Lanzamiento',
    desc: 'Silueta urbana con suela de tracción ultra resistente, confeccionada para el dinamismo de la ciudad.',
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Retro High Vintage',
    price: '$329.96',
    badge: 'Más Vendido',
    desc: 'Calzado lifestyle refinado con soporte reactivo y ajuste anatómico de la mañana a la noche.',
    img: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Zoom Vomero Track',
    price: '$169.99',
    badge: 'En Tendencia',
    desc: 'Acentos vibrantes sobre amortiguación clásica, diseñada para exploradores urbanos con estilo.',
    img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=600&auto=format&fit=crop',
  },
];

export const Scene4ProductGrids: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, mass: 0.8, stiffness: 90 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME_COLORS.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: SANS_FONT,
        padding: '40px 80px',
      }}
    >
      {/* Heading Block */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: 900,
          marginBottom: 36,
          opacity: interpolate(titleSpring, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(titleSpring, [0, 1], [25, 0])}px)`,
        }}
      >
        <div style={{ display: 'inline-block', marginBottom: 12 }}>
          <Badge text="03 • Product Grid & Card Architecture" />
        </div>
        <h2
          style={{
            fontFamily: EDITORIAL_FONT,
            fontSize: 44,
            fontWeight: 600,
            color: THEME_COLORS.dark,
            margin: '0 0 10px 0',
            letterSpacing: '-1px',
          }}
        >
          Colecciones Recién Lanzadas
        </h2>
        <p style={{ fontSize: 17, color: THEME_COLORS.textMuted, margin: 0 }}>
          Componente <code>featured-product-grid.liquid</code> + <code>custom-product-card.liquid</code> con botones dobles de compra directa y añadir al carrito.
        </p>
      </div>

      {/* 3 Product Cards Showcase */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 28,
          width: '100%',
          maxWidth: 1360,
        }}
      >
        {SAMPLE_PRODUCTS.map((prod, index) => {
          const cardSpring = spring({
            frame: frame - index * 12,
            fps,
            config: { damping: 14, mass: 0.8, stiffness: 85 },
          });

          // Focus effect on the second card after frame 70
          const isFocused = index === 1 && frame > 70;
          const focusScale = isFocused ? 1.04 : 1;

          return (
            <div
              key={prod.title}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 16,
                border: `1px solid ${isFocused ? THEME_COLORS.dark : THEME_COLORS.border}`,
                overflow: 'hidden',
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: isFocused
                  ? '0 20px 40px rgba(0,0,0,0.14)'
                  : '0 8px 24px rgba(0,0,0,0.04)',
                opacity: interpolate(cardSpring, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(cardSpring, [0, 1], [50, 0])}px) scale(${focusScale})`,
                transition: 'all 0.4s ease',
              }}
            >
              {/* Product Image Box */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#F7F6F2',
                  borderRadius: 12,
                  height: 310,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Img
                  src={prod.img}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                {/* Badge Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    backgroundColor: THEME_COLORS.dark,
                    color: '#FFF',
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '5px 12px',
                    borderRadius: 999,
                    letterSpacing: '0.4px',
                    textTransform: 'uppercase',
                  }}
                >
                  {prod.badge}
                </div>

                {/* Price Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 14,
                    right: 14,
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(8px)',
                    color: THEME_COLORS.dark,
                    fontSize: 14,
                    fontWeight: 700,
                    padding: '5px 12px',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                >
                  {prod.price}
                </div>
              </div>

              {/* Card Meta */}
              <div style={{ padding: '16px 8px 6px 8px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontFamily: SANS_FONT,
                    fontSize: 19,
                    fontWeight: 600,
                    color: THEME_COLORS.dark,
                    margin: '0 0 8px 0',
                  }}
                >
                  {prod.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: THEME_COLORS.textMuted,
                    margin: '0 0 16px 0',
                    flex: 1,
                  }}
                >
                  {prod.desc}
                </p>

                {/* Dual Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      color: THEME_COLORS.dark,
                      border: `1px solid ${THEME_COLORS.border}`,
                      padding: '10px 0',
                      borderRadius: 8,
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Añadir al Carrito
                  </button>
                  <button
                    style={{
                      backgroundColor: THEME_COLORS.dark,
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '10px 0',
                      borderRadius: 8,
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Comprar Ahora
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
