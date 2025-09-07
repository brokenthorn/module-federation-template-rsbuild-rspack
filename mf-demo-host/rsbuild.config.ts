import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import { moduleFederationPluginOptions } from './module-federation.config';

export default defineConfig({
  // For local development and preview. Make sure all locally running MFEs have
  // different ports from this and from each other, so this host (the portal)
  // can reach each MFE individually.
  server: {
    port: 6001,
    // Enable allow all origins during development so we don't have to deal with CORS:
    cors: true,
  },

  moduleFederation: {
    options: moduleFederationPluginOptions,
  },

  plugins: [
    pluginReact(
      // {
      //   Enable React Profiler in production builds when trying to analyze
      //   production performance issues using the React DevTools. Disabled by
      //   default because it adds a slight overhead.
      //   enableProfiler: true,
      // }
    ),
  ],
});
