import {
  createBrowserRouter,
  type DOMRouterOpts,
  type RouteObject,
} from 'react-router';
import App from './App';
import { RouteModuleErrorBoundary } from './error-boundaries/RouteModuleErrorBoundary';
import Page1 from './pages/page-1/Page1';
import Page2 from './pages/page-2/Page2';

type NonNavigableRouteObject = RouteObject & {
  /**
   * Router path.
   *
   * Used by the Router, and can contain dynamic parts, so don't use it for
   * links.
   * If you want to create static links to this route, convert it to a {@link
   * NavigableRouteObject} first, which has a `pathname` property for this
   * purpose.
   **/
  path: string;
};

type NavigableRouteObject = RouteObject & {
  /**
   * Router path.
   *
   * Used by the Router, and can contain dynamic parts, so don't use it for
   * links. Use `pathname` instead.
   **/
  path: string;
  /**
   * Route pathname.
   *
   * Should be like `path` but without dynamic parts and must be absolute
   * (i.e., start with `/`).
   * Can be used with NavLinks, or other links, for navigable routes.
   */
  pathname: string;
};

export const homeRoute: NavigableRouteObject = {
  ErrorBoundary: RouteModuleErrorBoundary,
  path: '/',
  pathname: '/',
  Component: App,
};

export const page1Route: NonNavigableRouteObject = {
  ErrorBoundary: RouteModuleErrorBoundary,
  path: '/page-1',
  Component: Page1,
};

export const page2Route: NavigableRouteObject = {
  ErrorBoundary: RouteModuleErrorBoundary,
  path: '/page-2',
  pathname: '/page-2',
  Component: Page2,
};

// NOTE: Don't forget to add all defined routes to the routes array below!

const routes: RouteObject[] = [homeRoute, page1Route, page2Route];

/**
 * Builds the application router.
 *
 * Optional router options can be provided, such as the Router `basename`,
 * which is useful when mounting this application as an MFE inside a host that
 * also uses BrowserRouter or similar, and mounts the MFE under `/basename/*`,
 * where `*` is where this router's responsibilities begin, and the actual
 * value of `/basename`, e.g. `/.../mfe-apps-root`, is under the control of the
 * host's router.
 * This way the mounted MFE does not accidentally unload itself, by navigating
 * the browser away from its mount point.
 */
export const makeAppRouter = (opts?: DOMRouterOpts) =>
  createBrowserRouter(routes, opts);
