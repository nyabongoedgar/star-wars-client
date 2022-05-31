import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/client/testing";

const renderApollo = (
  node,
  { mocks, addTypename, defaultOptions, cache, resolvers, ...options }
) => {
  return render(
    <Router>
      <MockedProvider
        mocks={mocks}
        addTypename={addTypename}
        defaultOptions={defaultOptions}
        cache={cache}
        resolvers={resolvers}
        removeTypename
      >
        {node}
      </MockedProvider>
    </Router>,
    options
  );
};

export * from "@testing-library/react";
export { renderApollo };
