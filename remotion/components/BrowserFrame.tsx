import React from 'react';
import { THEME_COLORS, SANS_FONT } from '../constants';

interface BrowserFrameProps {
  url?: string;
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  url = 'https://gosense.co/collections/sneakers',
  children,
  width = 1520,
  height = 840,
  style = {},
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.08)',
        border: `1px solid ${THEME_COLORS.border}`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        ...style,
      }}
    >
      {/* Safari Window Header Bar */}
      <div
        style={{
          height: 48,
          backgroundColor: '#FAFAF8',
          borderBottom: `1px solid ${THEME_COLORS.border}`,
          display: 'flex',
          alignItems: 'center',
          padding: '0 18px',
          gap: 16,
          flexShrink: 0,
        }}
      >
        {/* macOS Window Controls */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27C93F' }} />
        </div>

        {/* Address / Search Bar */}
        <div
          style={{
            flex: 1,
            maxWidth: 620,
            margin: '0 auto',
            height: 28,
            backgroundColor: '#EFEFEA',
            borderRadius: 7,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            fontFamily: SANS_FONT,
            fontSize: 12,
            color: '#555555',
            letterSpacing: '0.2px',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2.2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>{url}</span>
        </div>

        {/* Action icons dummy */}
        <div style={{ display: 'flex', gap: 12, opacity: 0.5 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>

      {/* Viewport Content */}
      <div
        style={{
          flex: 1,
          backgroundColor: THEME_COLORS.bg,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  );
};
