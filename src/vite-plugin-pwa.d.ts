// src/vite-plugin-pwa.d.ts
declare module 'virtual:pwa-register' {
  export function registerSW(options?: {
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
  }): () => void;
}
