import { createRoot, type Root } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { makeAppRouter } from './routing';

let root: Root | null = null;

/**
 * Mounts the React application. If already mounted, re-renders the application.
 * @throws {Error} Thrown if `basename` is not provided or `element` is undefined.
 */
export const mount = (element: HTMLElement, basename: string) => {
  if (!element)
    throw new Error('An element is required to mount this React application');
  if (!basename)
    throw new Error('A basename is required to mount this React application');
  if (!root) root = createRoot(element);
  const router = makeAppRouter({ basename });
  root.render(<RouterProvider router={router} />);
};

/** Unmounts the React application, if mounted. */
export const unmount = () => {
  if (root) {
    root.unmount();
    root = null;
  }
};
