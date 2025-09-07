// Note how exporting and importing components without type information can be
// problematic.
// You would have to maintain manual type declarations on the consumer side.
// With large codebases this can become unmaintainable and could cause
// undesired runtime behavior or bugs if any mistakes are made with the type
// declarations or the provider publishes a breaking change without notice.
// Module Federation v2.0 adds dynamic type imports, but the host and remote
// must both use MF v2.0.
// Rsbuild defaults to Module Federation v1.5, which doesn't have dynamic type
// imports.
// For more information on how to switch to v2.0, refer to
// https://rsbuild.rs/guide/advanced/module-federation

const Button = (props?: { children?: React.ReactNode }) => {
  return (
    <button type="button">
      {props?.children ??
        'This is a custom button component exported and loaded via Module Federation'}
    </button>
  );
};

export default Button;
