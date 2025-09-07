import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import * as packageJson from './package.json';

export default defineConfig({
  // For local development and preview. Make sure all locally running MFEs have
  // different ports from the host and from each other, so the host (the
  // portal) can reach each MFE individually.
  server: {
    port: 6002,
    // Enable allow all origins during development so we don't have to deal with CORS:
    cors: true,
  },

  moduleFederation: {
    options: {
      name: packageJson.name.replace(/-/g, '_'),
      exposes: {
        './mfe-mount': './src/mfe-mount.tsx',
        './button': './src/components/button.tsx',
      },
      // remotes: {},
      filename: 'remoteEntry.js',
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: packageJson.dependencies.react,
        },
        'react-dom': {
          eager: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
        'react-router': {
          eager: true,
          requiredVersion: packageJson.dependencies['react-router'],
        },
      },
    },
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
