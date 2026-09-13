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

export const Scene7CartDrawer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slide-in drawer animation from right
  const drawerProgress = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 85 },
  });

  // Progress bar fill animation
  const barProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 16, mass: 0.9, stiffness: 70 },
  });

  const drawerX = interpolate(drawerProgress, [0, 1], [500, 0]);
  const backdropOpacity = interpolate(drawerProgress, [0, 1], [0, 0.65]);
  const percentWidth = interpolate(barProgress, [0, 1], [30, 100]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME_COLORS.bg,
        display: 'flex',
        fontFamily: SANS_FONT,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left side: Explanatory content */}
      <div
        style={{
          flex: 1,
          padding: '60px 80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: 780,
          zIndex: 1,
        }}
      >
        <div style={{ marginBottom: 14 }}>
          <Badge text="06 • Interactive Cart Drawer" />
        </div>

        <h2
          style={{
            fontFamily: EDITORIAL_FONT,
            fontSize: 48,
            fontWeight: 600,
            lineHeight: 1.15,
            color: THEME_COLORS.dark,
            margin: '0 0 18px 0',
          }}
        >
          Carrito Lateral Ajax<br />
          Sin Recargas de Página
        </h2>

        <p
          style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: THEME_COLORS.textMuted,
            margin: '0 0 30px 0',
          }}
        >
          Diseñado para maximizar el ticket promedio mediante una barra dinámica de envío gratis,
          actualización en tiempo real con la API de Shopify y pago en un clic.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            'Barra de progreso de Envío Gratis configurable',
            'Modificación instantánea de cantidades sin refrescar',
            'Soporte completo para notas de pedido y cupones',
            'Compatible con Shopify Payments, Mercado Pago y Addi',
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: THEME_COLORS.dark,
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                ✓
              </div>
              <span style={{ fontSize: 16, color: THEME_COLORS.dark, fontWeight: 500 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dim backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#000000',
          opacity: backdropOpacity,
          pointerEvents: 'none',
        }}
      />

      {/* Slide-in Drawer Window on the Right */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 520,
          backgroundColor: '#FFFFFF',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'column',
          transform: `translateX(${drawerX}px)`,
          zIndex: 10,
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: `1px solid ${THEME_COLORS.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <h3 style={{ margin: 0, fontSize: 20, fontFamily: EDITORIAL_FONT, fontWeight: 700 }}>
              Tu Carrito
            </h3>
            <span
              style={{
                backgroundColor: '#F3F3F1',
                padding: '2px 9px',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              2 artículos
            </span>
          </div>
          <span style={{ fontSize: 22, color: '#999', cursor: 'pointer' }}>✕</span>
        </div>

        {/* Free Shipping Banner */}
        <div
          style={{
            backgroundColor: '#F7F6F2',
            padding: '16px 28px',
            borderBottom: `1px solid ${THEME_COLORS.border}`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8, fontWeight: 600 }}>
            <span>🎉 ¡Felicidades! Tienes <strong>Envío Gratis</strong></span>
            <span>100%</span>
          </div>
          <div style={{ height: 6, backgroundColor: '#E0E0DC', borderRadius: 3, overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${percentWidth}%`,
                backgroundColor: '#27C93F',
                borderRadius: 3,
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div style={{ flex: 1, padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 18, overflowY: 'hidden' }}>
          {/* Item 1 */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              paddingBottom: 18,
              borderBottom: `1px solid ${THEME_COLORS.border}`,
            }}
          >
            <div style={{ width: 84, height: 84, borderRadius: 10, overflow: 'hidden', backgroundColor: '#F7F6F2' }}>
              <Img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=200"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: 15, fontWeight: 600 }}>Gaelic Indoor Classic</h4>
                <span style={{ fontSize: 13, color: '#777' }}>Talla: 42 • Blanco / Negro</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${THEME_COLORS.border}`,
                    borderRadius: 6,
                    height: 28,
                  }}
                >
                  <span style={{ padding: '0 8px', fontSize: 14 }}>-</span>
                  <span style={{ padding: '0 8px', fontSize: 13, fontWeight: 600 }}>1</span>
                  <span style={{ padding: '0 8px', fontSize: 14 }}>+</span>
                </div>
                <strong style={{ fontSize: 15 }}>$219.96</strong>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              paddingBottom: 18,
              borderBottom: `1px solid ${THEME_COLORS.border}`,
            }}
          >
            <div style={{ width: 84, height: 84, borderRadius: 10, overflow: 'hidden', backgroundColor: '#F7F6F2' }}>
              <Img
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=200"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: 15, fontWeight: 600 }}>Retro High Vintage</h4>
                <span style={{ fontSize: 13, color: '#777' }}>Talla: 41 • Charcoal</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${THEME_COLORS.border}`,
                    borderRadius: 6,
                    height: 28,
                  }}
                >
                  <span style={{ padding: '0 8px', fontSize: 14 }}>-</span>
                  <span style={{ padding: '0 8px', fontSize: 13, fontWeight: 600 }}>1</span>
                  <span style={{ padding: '0 8px', fontSize: 14 }}>+</span>
                </div>
                <strong style={{ fontSize: 15 }}>$329.96</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Footer & Checkout Button */}
        <div
          style={{
            padding: '24px 28px',
            backgroundColor: '#FAFAF8',
            borderTop: `1px solid ${THEME_COLORS.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15 }}>
            <span style={{ color: '#666' }}>Subtotal estimado</span>
            <strong style={{ fontSize: 20, color: THEME_COLORS.dark }}>$549.92 COP</strong>
          </div>
          <span style={{ fontSize: 12, color: '#888' }}>
            Impuestos y tarifas calculados en la pantalla de pago
          </span>
          <button
            style={{
              backgroundColor: THEME_COLORS.dark,
              color: '#FFFFFF',
              border: 'none',
              padding: '16px 0',
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.4px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
            }}
          >
            Finalizar Pedido Seguro →
          </button>
        </div>
      </div>
    </AbsoluteFill>
  );
};
