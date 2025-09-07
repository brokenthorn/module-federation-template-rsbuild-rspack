# module-federation-template-rsbuild-rspack

Module Federation Starter Project with a Host Portal and one Remote MFE, showcasing both component sharing and framework-agnostic application mounting, as well as independent host and remote client navigation. Based on Rsbuild and Rspack.

Contains two folders that you can easily convert to separate repositories or separate packages, if you're using a monorepo.

**Contents:**

- Micro Frontends Demo - MFE Host App\
  This is a host application for other Micro Frontends.
- Micro Frontends Demo - MFE Remote App\
  This is a remote Micro Frontend application to be mounted and/or have its components reused in a host application.

Refer to their folders' `README.md` files for information on how to launch the demo locally.

## Features

- Projects are based on `create-rsbuild`'s React template (`yarn create rsbuild`) with Biome for code linting and formatting. I could have used the Angular template for the Remote, to showcase the framework-agnostic mounting, but I have close to no experience with other frameworks and I didn't have time to waste.
- The `tsconfig`'s were tightened a bit for more robust production code (`noFallthroughCasesInSwitch`, `noUncheckedIndexedAccess`, `strictNullChecks`, `noImplicitAny` &mdash; TS compiler options which are highly recommended for high quality projects).
- React 19 on both the Host and the Remote, but they could have been any of the frameworks supported by Rsbuild.
- React Router, configured in Data Mode, moving route configuration outside of React rendering, with minimal extensions added to the routes so that it's super easy to share a single source of truth for routing and links (e.g., `NavLinks` used for app navigation). Data Mode also enables router data loading, actions, route navigation pending state, and more.
- Rsbuild and Rspack for near instant hot-reload, even when updating the remote MFE and viewing it mounted in the Host FE.
- Provisions made for configuring remotes' URLs in production or other deployed environments, with separate config objects, making it easy for you to deploy your apps as well as develop them locally while benefiting from the same frontend development experience you're used to from developing non-MFE applications.
- TSDocs added to make the code easier to understand.
- Dev servers configured to listen on different ports so they can be run locally without conflicts. Host is on 6001, Remotes start from 6002 upwards. For production or deployed/container environments, configuration is separate (e.g., you would use your web server or proxy ports and host names).

The projects are very small, so you should definitely check out every file to get an idea of how everything works.

## Learn more

To learn more about Rsbuild, check out the following resources:

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your feedback and contributions are welcome!

