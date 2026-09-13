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

export const Scene3PromoCards: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sequential springs for the 3 cards
  const card1Spring = spring({ frame: frame, fps, config: { damping: 14, mass: 0.8, stiffness: 90 } });
  const card2Spring = spring({ frame: frame - 10, fps, config: { damping: 14, mass: 0.8, stiffness: 90 } });
  const card3Spring = spring({ frame: frame - 20, fps, config: { damping: 14, mass: 0.8, stiffness: 90 } });

  // Interactive pulse on the STYLE-STACK card
  const styleStackPulse = Math.sin((frame - 60) * 0.1) * 0.02 + 1;
  const isPulsing = frame > 60;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME_COLORS.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: SANS_FONT,
        padding: '50px 80px',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          width: '100%',
          maxWidth: 1440,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 36,
        }}
      >
        <div>
          <div style={{ marginBottom: 12 }}>
            <Badge text="02 • Promotional Grid" />
          </div>
          <h2
            style={{
              fontFamily: EDITORIAL_FONT,
              fontSize: 44,
              fontWeight: 600,
              color: THEME_COLORS.dark,
              margin: 0,
              letterSpacing: '-1px',
            }}
          >
            Sección: 3 Tarjetas Promocionales
          </h2>
          <p
            style={{
              fontSize: 18,
              color: THEME_COLORS.textMuted,
              margin: '8px 0 0 0',
            }}
          >
            Bloques configurables con fotos editoriales, textos personalizables y botón especial Style-Stack.
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: `1px solid ${THEME_COLORS.border}`,
            padding: '12px 20px',
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 600,
            color: THEME_COLORS.dark,
          }}
        >
          Sección: <code>promotional-cards.liquid</code>
        </div>
      </div>

      {/* 3 Cards Grid Container */}
      <div
        style={{
          width: '100%',
          maxWidth: 1440,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 28,
          height: 540,
        }}
      >
        {/* CARD 1 */}
        <div
          style={{
            borderRadius: 18,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            border: `1px solid ${THEME_COLORS.border}`,
            opacity: interpolate(card1Spring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(card1Spring, [0, 1], [40, 0])}px)`,
          }}
        >
          <Img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 32,
              left: 32,
              right: 32,
              color: '#FFFFFF',
            }}
          >
            <h3
              style={{
                fontFamily: EDITORIAL_FONT,
                fontSize: 24,
                lineHeight: 1.3,
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              Zapatillas que se adaptan a tu ritmo: cómodas, duraderas y siempre en tendencia.
            </h3>
            <button
              style={{
                backgroundColor: '#FFFFFF',
                color: '#111111',
                border: 'none',
                padding: '12px 26px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Ver Colección
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          style={{
            borderRadius: 18,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            border: `1px solid ${THEME_COLORS.border}`,
            opacity: interpolate(card2Spring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(card2Spring, [0, 1], [40, 0])}px)`,
          }}
        >
          <Img
            src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=800&auto=format&fit=crop"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 32,
              left: 32,
              right: 32,
              color: '#FFFFFF',
            }}
          >
            <h3
              style={{
                fontFamily: EDITORIAL_FONT,
                fontSize: 24,
                lineHeight: 1.3,
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              ¡Nuevos Lanzamientos! Diseños extraordinarios que hablan antes que tú.
            </h3>
            <button
              style={{
                backgroundColor: '#FFFFFF',
                color: '#111111',
                border: 'none',
                padding: '12px 26px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Explorar Ahora
            </button>
          </div>
        </div>

        {/* CARD 3 (STYLE STACK FEATURED) */}
        <div
          style={{
            borderRadius: 18,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
            border: `2px solid ${THEME_COLORS.dark}`,
            opacity: interpolate(card3Spring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(card3Spring, [0, 1], [40, 0])}px) scale(${
              isPulsing ? styleStackPulse : 1
            })`,
          }}
        >
          <Img
            src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=800&auto=format&fit=crop"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 32,
              left: 32,
              right: 32,
              textAlign: 'center',
              color: '#FFFFFF',
            }}
          >
            <span
              style={{
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#E0E0DC',
                fontWeight: 600,
                display: 'block',
                marginBottom: 8,
              }}
            >
              Edición Especial
            </span>
            <h3
              style={{
                fontFamily: EDITORIAL_FONT,
                fontSize: 36,
                letterSpacing: '2px',
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              STYLE-STACK
            </h3>
            <button
              style={{
                backgroundColor: '#FFFFFF',
                color: '#111111',
                border: 'none',
                padding: '13px 32px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              }}
            >
              Comprar Sneakers
            </button>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
