import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center h-screen bg-background">
            <h1 className="text-4xl font-semibold text-destructive">
              Something went wrong
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {this.state.error?.message}
            </p>
            <Button onClick={this.handleReset} className="mt-6">
              Try again
            </Button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
