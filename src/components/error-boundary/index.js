// ErrorBoundary.js

import React, { useState, useEffect } from "react";
import Error404 from "../error-pages-list/error404/error-404.component";
import Error403 from "../error-pages-list/error403/error-403.component";
import Error500 from "../error-pages-list/error500/error500.component";

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError({ message: "Request timed out" });
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleOnError = (error, errorInfo) => {
    setError(error);
    console.log("error", errorInfo);
    setHasError(true);
  };

  if (error && hasError) {
    const { response } = error;
    if (response && response.status) {
      console.log("error", response);
      // Render different fallback components based on error status code
      switch (response.status) {
        case 404:
          return <Error404 />;
        case 403:
          return <Error403 />;
        case 400:
          return <Error403 />;
        case 500:
          return <Error500 />;
        // Add more cases for other status codes as needed
        //   default:
        //     return <h1>Something went wrong.</h1>;
      }
    }
  }

  return (
    <React.Fragment>
      {/* {renderFallbackComponent()} */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onError: handleOnError });
        }
        return child;
      })}
    </React.Fragment>
  );
};

export default ErrorBoundary;
