/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PORT: number;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_DEFAULT_LANG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
