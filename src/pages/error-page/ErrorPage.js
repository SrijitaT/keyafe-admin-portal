import React from "react";
import Error403 from "../../components/error-pages-list/error403/error-403.component";
import Error404 from "../../components/error-pages-list/error404/error-404.component";

const ErrorPage = ({ code }) => {
  switch (code) {
    case 404:
      return <Error404 />;
    case 403:
      return <Error403 />;

    default:
      break;
  }
};

export default ErrorPage;
