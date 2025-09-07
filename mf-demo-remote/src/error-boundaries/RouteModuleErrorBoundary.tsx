import { isRouteErrorResponse, useRouteError } from 'react-router';

/**
 * An error boundary specific to React Router route modules.
 *
 * To be used with the `Route.ErrorBoundary` property only.
 */
export function RouteModuleErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // rendered when thrown from a action/loader
    return (
      <div style={{ padding: 12 }}>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    // rendered when thrown from within the route component tree
    const isDevBuild = process.env.NODE_ENV === 'development'; // auto-injected by Rsbuild
    const stackTraceJsx = isDevBuild ? (
      <p>
        <strong>Stack Trace</strong>
        <br />
        <pre>{error.stack}</pre>
      </p>
    ) : null;

    return (
      <div style={{ padding: 12 }}>
        <h1>Error</h1>
        <p style={{ fontSize: '1.2em' }}>
          {error.name}: {error.message}
        </p>
        {stackTraceJsx}
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
