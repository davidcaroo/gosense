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

export const Scene6ProductDetail: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, mass: 0.8, stiffness: 80 } });
  const selectedSize = frame > 80 ? '42' : '41';

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME_COLORS.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: SANS_FONT,
        padding: '24px 40px',
      }}
    >
      {/* Scene Header */}
      <div
        style={{
          width: '100%',
          maxWidth: 1440,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Badge text="05 • Product Page Experience" />
          <h2
            style={{
              margin: 0,
              fontSize: 26,
              fontFamily: EDITORIAL_FONT,
              fontWeight: 600,
              color: THEME_COLORS.dark,
            }}
          >
            Página de Producto & Optimización de Conversión
          </h2>
        </div>
        <span style={{ fontSize: 13, color: THEME_COLORS.textMuted }}>
          Galería interactiva • Selector de tallas • Sticky bar • Acordeones de detalle
        </span>
      </div>

      {/* Browser Mockup displaying Product Details */}
      <div
        style={{
          opacity: interpolate(entrance, [0, 1], [0, 1]),
          transform: `scale(${interpolate(entrance, [0, 1], [0.95, 1])})`,
        }}
      >
        <BrowserFrame url="https://gosense.co/products/gaelic-indoor-shoes" width={1440} height={830}>
          <div
            style={{
              padding: '36px 60px',
              display: 'grid',
              gridTemplateColumns: '52% 48%',
              gap: 50,
              backgroundColor: '#FFFFFF',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            {/* Left: Product Media Gallery */}
            <div style={{ display: 'flex', gap: 16 }}>
              {/* Thumbs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=300',
                  'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=300',
                  'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=300'].map((thumb, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 10,
                      overflow: 'hidden',
                      border: idx === 0 ? `2px solid ${THEME_COLORS.dark}` : `1px solid ${THEME_COLORS.border}`,
                    }}
                  >
                    <Img src={thumb} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div
                style={{
                  flex: 1,
                  height: 620,
                  borderRadius: 16,
                  overflow: 'hidden',
                  backgroundColor: '#F7F6F2',
                  border: `1px solid ${THEME_COLORS.border}`,
                  position: 'relative',
                }}
              >
                <Img
                  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: 18,
                    left: 18,
                    backgroundColor: THEME_COLORS.dark,
                    color: '#FFF',
                    fontSize: 12,
                    fontWeight: 600,
                    padding: '6px 14px',
                    borderRadius: 999,
                    textTransform: 'uppercase',
                  }}
                >
                  Nuevo Lanzamiento
                </span>
              </div>
            </div>

            {/* Right: Product Purchase Form */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div style={{ color: '#F5A623', fontSize: 14 }}>★★★★★</div>
                <span style={{ fontSize: 13, color: '#777' }}>(48 reseñas verificadas)</span>
              </div>

              <h1
                style={{
                  fontFamily: EDITORIAL_FONT,
                  fontSize: 38,
                  fontWeight: 600,
                  margin: '0 0 10px 0',
                  color: THEME_COLORS.dark,
                }}
              >
                Gaelic Indoor Classic
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <span style={{ fontSize: 26, fontWeight: 700, color: THEME_COLORS.dark }}>$219.96 COP</span>
                <span style={{ fontSize: 16, color: '#999', textDecoration: 'line-through' }}>$279.99 COP</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#27C93F', backgroundColor: '#E8F8ED', padding: '3px 8px', borderRadius: 4 }}>
                  AHORRA 21%
                </span>
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.6, color: THEME_COLORS.textMuted, margin: '0 0 24px 0' }}>
                Silueta urbana de corte bajo inspirada en el calzado de sala de los años 80. Fabricada con piel premium y suela vulcanizada de máxima adherencia.
              </p>

              {/* Size Selector */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: THEME_COLORS.dark }}>Seleccionar Talla (EU):</span>
                  <span style={{ fontSize: 13, textDecoration: 'underline', color: '#666', cursor: 'pointer' }}>Guía de tallas</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {['38', '39', '40', '41', '42', '43'].map((sz) => {
                    const active = sz === selectedSize;
                    return (
                      <div
                        key={sz}
                        style={{
                          width: 46,
                          height: 44,
                          borderRadius: 8,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 14,
                          fontWeight: 600,
                          backgroundColor: active ? THEME_COLORS.dark : '#F7F6F2',
                          color: active ? '#FFFFFF' : THEME_COLORS.dark,
                          border: `1px solid ${active ? THEME_COLORS.dark : THEME_COLORS.border}`,
                          transition: 'all 0.2s',
                        }}
                      >
                        {sz}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <button
                  style={{
                    backgroundColor: THEME_COLORS.dark,
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '16px 0',
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: '0.4px',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                  }}
                >
                  Añadir al Carrito — $219.96
                </button>
                <button
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: THEME_COLORS.dark,
                    border: `1.5px solid ${THEME_COLORS.dark}`,
                    padding: '14px 0',
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  Comprar con Shopify Pay
                </button>
              </div>

              {/* Trust Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 12,
                  marginTop: 24,
                  paddingTop: 18,
                  borderTop: `1px solid ${THEME_COLORS.border}`,
                  fontSize: 12,
                  color: '#666',
                  textAlign: 'center',
                }}
              >
                <div>🚚 Envío gratis Colombia</div>
                <div>🔄 30 días de cambio</div>
                <div>🛡️ 100% Original</div>
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>
    </AbsoluteFill>
  );
};
