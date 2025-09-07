/// <reference types="@rsbuild/core/types" />

/**
 * Imports the SVG file as a React component.
 * @requires [@rsbuild/plugin-svgr](https://npmjs.com/package/@rsbuild/plugin-svgr)
 */
declare module '*.svg?react' {
  import type React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module 'mf_demo_remote/mfe-mount' {
  const mount: (element: Element, basename: string) => void;
  const unmount: () => void;
}

declare module 'mf_demo_remote/button' {
  const Button: (props?: { children?: React.ReactNode }) => React.ReactNode;
  export default Button;
}
