# Rsbuild & Rspack Module Federation Template

This is a starter project demonstrating **Module Federation** using **Rsbuild** and **Rspack**. It includes a host application and a single remote micro-frontend (MFE). The template showcases component sharing, framework-agnostic application mounting, and independent navigation for both the host and remote clients.

The project is structured into two folders, which can easily be converted into separate repositories or used as separate packages within a monorepo.

## Structure

* **MFE Host App:** A host application designed to load and orchestrate other MFEs.
* **MFE Remote App:** A remote micro-frontend that provides components and/or an entire application to be mounted within a host.

Refer to the `README.md` file within each folder for instructions on how to run the demo locally.

## Key Features

* **Tooling:** Projects are based on the `create-rsbuild` React template and use Biome for code linting and formatting.
* **TypeScript:** The `tsconfig` files have been configured with stricter options (`noFallthroughCasesInSwitch`, `noUncheckedIndexedAccess`, `strictNullChecks`, `noImplicitAny`) to promote more robust and higher-quality code.
* **React:** Both the host and remote applications use React 19, though any framework supported by Rsbuild could be used.
* **Routing:** React Router is configured in Data Mode, which separates route configuration from React rendering. This makes it easier to share a single source of truth for routing and links, and it enables features like data loading, actions, and pending states.
* **Performance:** Rsbuild and Rspack provide near-instant hot-reloading, even when updating the remote MFE and viewing the changes in the host.
* **Production Readiness:** The project includes provisions for configuring remote MFE URLs in production or deployed environments, allowing for a seamless transition from local development to deployment.
* **Documentation:** TSDocs have been added throughout the codebase to improve clarity and understanding.
* **Development Experience:** The dev servers are configured to run on different ports (Host: 6001, Remotes: 6002+) to prevent conflicts when running locally.

The project is intentionally small to make it easy to explore the entire codebase and understand how everything works together.

## Learn More

To learn more about Rsbuild, check out the following resources:

* **Rsbuild documentation:** Explore features and APIs at [https://rsbuild.rs](https://rsbuild.rs).
