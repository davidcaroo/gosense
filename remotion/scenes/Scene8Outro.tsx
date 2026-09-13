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

export const Scene8Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, mass: 0.8, stiffness: 90 } });
  const gridSpring = spring({ frame: frame - 15, fps, config: { damping: 14, mass: 0.8, stiffness: 85 } });
  const ctaSpring = spring({ frame: frame - 30, fps, config: { damping: 14, mass: 0.8, stiffness: 90 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME_COLORS.dark,
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: SANS_FONT,
        padding: '60px 80px',
        textAlign: 'center',
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 900,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Outro Content */}
      <div
        style={{
          maxWidth: 1000,
          zIndex: 2,
        }}
      >
        <div
          style={{
            opacity: interpolate(titleSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(titleSpring, [0, 1], [30, 0])}px)`,
            marginBottom: 20,
          }}
        >
          <Badge text="GoSense • Arquitectura & Rendimiento" variant="outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFF' }} />
        </div>

        <h2
          style={{
            fontFamily: EDITORIAL_FONT,
            fontSize: 68,
            lineHeight: 1.1,
            fontWeight: 500,
            margin: '0 0 20px 0',
            letterSpacing: '-1.5px',
            opacity: interpolate(titleSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(titleSpring, [0, 1], [30, 0])}px)`,
          }}
        >
          Diseñado Para Vender.<br />
          <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#D8D5CE' }}>
            Construido Con Precisión.
          </span>
        </h2>

        {/* 4 Feature Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
            margin: '40px 0',
            opacity: interpolate(gridSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(gridSpring, [0, 1], [30, 0])}px)`,
          }}
        >
          {[
            { title: 'Shopify OS 2.0', desc: 'Plantillas JSON y secciones en cualquier página' },
            { title: 'Liquid Puro', desc: 'Sin dependencias lentas, 100% velocidad nativa' },
            { title: 'Mobile First', desc: 'Navegación táctil y cajón móvil optimizado' },
            { title: 'Alta Conversión', desc: 'Carrito Ajax reactivo y botón sticky' },
          ].map((pillar, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '24px 20px',
                borderRadius: 14,
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: 24, marginBottom: 10 }}>⚡</div>
              <strong style={{ fontSize: 17, display: 'block', marginBottom: 6, color: '#FFFFFF' }}>
                {pillar.title}
              </strong>
              <span style={{ fontSize: 13, color: '#A0A09C', lineHeight: 1.4, display: 'block' }}>
                {pillar.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Final CTA / Brand */}
        <div
          style={{
            opacity: interpolate(ctaSpring, [0, 1], [0, 1]),
            transform: `scale(${interpolate(ctaSpring, [0, 1], [0.95, 1])})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              color: '#111111',
              padding: '16px 42px',
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '0.5px',
              boxShadow: '0 8px 30px rgba(255, 255, 255, 0.18)',
            }}
          >
            Districolombia • Sense Theme
          </div>
          <span style={{ fontSize: 14, color: '#888' }}>
            Listo para producción en Shopify
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
