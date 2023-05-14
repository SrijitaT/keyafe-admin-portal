// ErrorBoundary.js

import Error404 from "../error-pages-list/error404/error-404.component";
import Error403 from "../error-pages-list/error403/error-403.component";
import Error500 from "../error-pages-list/error500/error500.component";
import { ErrorBoundary } from "react-error-boundary";
import Button from "../custom-button/custom-button.component";

function ErrorCategory(status) {
  console.log("status", status);
  switch (status.status) {
    case 400:
      return <h3>Bad Request</h3>;

    case 403:
      return <Error403 />;
    case 404:
      return <Error404 />;
    case 500:
      return <Error500 />;

    default:
      return <h3>Oops looks like there is an error at our end</h3>;
  }
}

function ErrorFallback({ error, resetErrorBoundary }) {
  console.log("error fallback", error);
  return (
    <div>
      <ErrorCategory status={error.status} />

      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </div>
  );
}

function ErrorBoundaryComponent({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}

export { ErrorBoundaryComponent, ErrorFallback };
