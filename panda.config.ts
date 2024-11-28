import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],
  globalVars: {
    '--font-pretendard':
      'Pretendard Variable Pretendard -apple-system BlinkMacSystemFont system-ui Roboto Helvetica Neue Segoe UI Apple SD Gothic Neo Noto Sans KR Malgun Gothic, Apple Color Emoji Segoe UI Emoji Segoe UI Symbol sans-serif',
  },
  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          red: { value: '#ff453a' },
          orange: { value: '#ff9f0a' },
          yellow: { value: '#fecc19' },
          green: { value: '#1feb71' },
          mint: { value: '#66d4cf' },
          teal: { value: '#6ac4dc' },
          cyan: { value: '#5ac8f5' },
          blue: { value: '#0a84ff' },
          indigo: { value: '#5e5ce6' },
          purple: { value: '#bf5af2' },
          pink: { value: '#ff375f' },
          brown: { value: '#ac8e68' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  globalFontface: {
    pretendard: {
      src: 'url(/fonts/pretend.woff2) formatDiagnostic("woff2")',
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
  },
});
