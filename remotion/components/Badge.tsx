import React from 'react';
import { THEME_COLORS, SANS_FONT } from '../constants';

interface BadgeProps {
  text: string;
  variant?: 'dark' | 'outline' | 'pill';
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'dark',
  style = {},
}) => {
  const isDark = variant === 'dark';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 14px',
        borderRadius: 999,
        backgroundColor: isDark ? THEME_COLORS.dark : 'transparent',
        color: isDark ? THEME_COLORS.white : THEME_COLORS.dark,
        border: isDark ? 'none' : `1px solid ${THEME_COLORS.border}`,
        fontFamily: SANS_FONT,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.8px',
        textTransform: 'uppercase',
        ...style,
      }}
    >
      {text}
    </span>
  );
};
