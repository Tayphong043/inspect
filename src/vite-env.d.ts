/// <reference types="vite/client" />

interface Window {
  __NetworkExtension__: {
    GM_info: import('vite-plugin-monkey/dist/client').MonkeyWindow['GM_info'];
    GM_xmlhttpRequest: import('vite-plugin-monkey/dist/client').MonkeyWindow['GM_xmlhttpRequest'];
  };
}

/**
 * the declaration of JSON5 esm format is not correct
 *
 * add this line to fix auto-import.d.ts type error
 */
declare const JSON5: typeof import('json5');
