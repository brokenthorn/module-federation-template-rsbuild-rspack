import type { Rspack } from '@rsbuild/core';
import { loadEnv } from '@rsbuild/core';
import * as packageJson from './package.json';

const commonOptions: Omit<Rspack.ModuleFederationPluginOptions, 'remotes'> = {
  name: packageJson.name.replace(/-/g, '_'),
  filename: 'remoteEntry.js',
  shared: {
    ...packageJson.dependencies,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: packageJson.dependencies.react,
    },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: packageJson.dependencies['react-dom'],
    },
    'react-router': {
      singleton: true,
      eager: true,
      requiredVersion: packageJson.dependencies['react-router'],
    },
  },
};

// You can change these as needed during local development.
//
// For example, you might want to pull down a git repository for an MFE that
// you're working on, run its dev server locally and point the portal/host to
// that local instance and benefit from HMR speeding up your development
// feedback loop.
//
// You could leave the other MFEs as they are if you don't need to access them
// during local development, or you could point to their deployment environment
// versions if you want (presumably not prod, but another environment that is
// safe to use, such as dev, staging, QA, a container instance, etc).
const remotesUsedDuringLocalDevelopment: Rspack.ModuleFederationPluginOptions['remotes'] =
  {
    mf_demo_remote:
      'mf_demo_remote@http://localhost:6002/remoteEntry.js',
  };

// TODO: adjust remotesUsedInDeployedEnvironments configuration
const remotesUsedInDeployedEnvironments = remotesUsedDuringLocalDevelopment;

// Print a friendly console info to know which module federation configuration
// will be loaded:
const rsBuildEnv = loadEnv();
const nodeEnv =
  rsBuildEnv.parsed.NODE_ENV?.toLowerCase().trim() ?? 'development';
const isDevelopment = nodeEnv === 'development';
if (isDevelopment) {
  console.info(
    `🚧 Module Federation configured for local development (NODE_ENV=${nodeEnv})`,
  );
} else {
  console.info(
    `🚀 Module Federation configured for deployed environments (NODE_ENV=${nodeEnv})`,
  );
}

/**
 * Module Federation plugin options, automatically chosen depending on runtime
 * environment (based on NODE_ENV).
 **/
export const moduleFederationPluginOptions: Rspack.ModuleFederationPluginOptions =
  isDevelopment
    ? {
        ...commonOptions,
        remotes: remotesUsedDuringLocalDevelopment,
      }
    : {
        ...commonOptions,
        remotes: remotesUsedInDeployedEnvironments,
      };
