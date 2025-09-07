import { Component, type ErrorInfo, type ReactNode } from 'react';

interface State {
  hasError: boolean;
  humanFriendlyErrorMessage?: string | undefined;
  error?: Error | undefined;
}

/**
 * A simple error boundary component that displays the message of the caught
 * exception, if it's an Error instance, otherwise displays a generic error
 * message. It also logs the exception and React ErrorInfo to the browser console.
 */
class SimpleErrorBoundary extends Component<
  {
    children?: ReactNode;
  },
  State
> {
  public readonly state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error,
      humanFriendlyErrorMessage: `${error.name}: ${error.message}`,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('SimpleErrorBoundary caught an error:', error, errorInfo);
    // TODO: Log the error to an error reporting service.
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Error</h2>
          <p>{this.state.humanFriendlyErrorMessage}</p>
        </>
      );
    }

    return this.props.children;
  }
}

export default SimpleErrorBoundary;
