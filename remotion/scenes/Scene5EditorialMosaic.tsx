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

export const Scene5EditorialMosaic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerSpring = spring({ frame, fps, config: { damping: 14, mass: 0.8, stiffness: 90 } });
  const tallSpring = spring({ frame: frame - 10, fps, config: { damping: 14, mass: 0.8, stiffness: 85 } });
  const wide1Spring = spring({ frame: frame - 20, fps, config: { damping: 14, mass: 0.8, stiffness: 85 } });
  const wide2Spring = spring({ frame: frame - 30, fps, config: { damping: 14, mass: 0.8, stiffness: 85 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME_COLORS.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: SANS_FONT,
        padding: '30px 80px',
      }}
    >
      {/* Header Info */}
      <div
        style={{
          width: '100%',
          maxWidth: 1440,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 24,
          opacity: interpolate(headerSpring, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(headerSpring, [0, 1], [25, 0])}px)`,
        }}
      >
        <div>
          <div style={{ marginBottom: 8 }}>
            <Badge text="04 • Editorial Mosaic & Trending Banner" />
          </div>
          <h2
            style={{
              fontFamily: EDITORIAL_FONT,
              fontSize: 38,
              fontWeight: 600,
              color: THEME_COLORS.dark,
              margin: 0,
              letterSpacing: '-0.8px',
            }}
          >
            Colecciones Más Recomendadas (Mosaico Asimétrico)
          </h2>
          <p style={{ fontSize: 16, color: THEME_COLORS.textMuted, margin: '6px 0 0 0' }}>
            Composición editorial de 1 tarjeta vertical alta + 2 tarjetas panorámicas apiladas.
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: `1px solid ${THEME_COLORS.border}`,
            padding: '10px 18px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <code>editorial-collection-mosaic.liquid</code>
        </div>
      </div>

      {/* Mosaic Grid Container */}
      <div
        style={{
          width: '100%',
          maxWidth: 1440,
          height: 520,
          display: 'grid',
          gridTemplateColumns: '44% 56%',
          gap: 22,
        }}
      >
        {/* Left Column: Tall Vertical Card */}
        <div
          style={{
            borderRadius: 16,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 12px 30px rgba(0,0,0,0.07)',
            opacity: interpolate(tallSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(tallSpring, [0, 1], [40, 0])}px)`,
          }}
        >
          <Img
            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=900&auto=format&fit=crop"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%)',
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
            <span style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '1.5px', opacity: 0.9 }}>
              Destacado Editorial
            </span>
            <h3
              style={{
                fontFamily: EDITORIAL_FONT,
                fontSize: 34,
                margin: '6px 0 16px 0',
                fontWeight: 600,
              }}
            >
              Sneakers High-Top
            </h3>
            <button
              style={{
                backgroundColor: '#FFFFFF',
                color: '#111111',
                border: 'none',
                padding: '12px 28px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Ver todos los productos
            </button>
          </div>
        </div>

        {/* Right Column: 2 Stacked Wide Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gap: 20,
          }}
        >
          {/* Top Wide Card */}
          <div
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
              opacity: interpolate(wide1Spring, [0, 1], [0, 1]),
              transform: `translateY(${interpolate(wide1Spring, [0, 1], [30, 0])}px)`,
            }}
          >
            <Img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=900&auto=format&fit=crop"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 80%)',
              }}
            />
            <div style={{ position: 'absolute', top: '50%', left: 32, transform: 'translateY(-50%)', color: '#FFF' }}>
              <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '1.5px', opacity: 0.9 }}>
                Colección Cápsula
              </span>
              <h4 style={{ fontFamily: EDITORIAL_FONT, fontSize: 26, margin: '4px 0 12px 0' }}>
                Retro Runner Series
              </h4>
              <button
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#111111',
                  border: 'none',
                  padding: '10px 22px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Ver todos los productos
              </button>
            </div>
          </div>

          {/* Bottom Wide Card */}
          <div
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
              opacity: interpolate(wide2Spring, [0, 1], [0, 1]),
              transform: `translateY(${interpolate(wide2Spring, [0, 1], [30, 0])}px)`,
            }}
          >
            <Img
              src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=900&auto=format&fit=crop"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 80%)',
              }}
            />
            <div style={{ position: 'absolute', top: '50%', left: 32, transform: 'translateY(-50%)', color: '#FFF' }}>
              <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '1.5px', opacity: 0.9 }}>
                Lanzamiento Exclusivo
              </span>
              <h4 style={{ fontFamily: EDITORIAL_FONT, fontSize: 26, margin: '4px 0 12px 0' }}>
                Monochrome Minimal
              </h4>
              <button
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#111111',
                  border: 'none',
                  padding: '10px 22px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Ver todos los productos
              </button>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
