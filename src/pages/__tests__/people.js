/* eslint-disable testing-library/prefer-find-by */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
// this adds custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import { InMemoryCache } from "@apollo/client";
import { renderApollo, cleanup } from "../../utils/test-utils";
import People, { PEOPLE } from "../People";

describe("People Page", () => {
  afterEach(cleanup);
  const cache = new InMemoryCache({ addTypename: false });

  it("renders people", async () => {
    const mocks = [
      {
        request: { query: PEOPLE, variables: { page: 1 } },
        result: {
          data: {
            people: {
              count: 82,
              next: "https://swapi.dev/api/people/?page=2",
              previous: null,
              results: [
                {
                  name: "Obi-Wan Kenobi",
                  height: "182",
                  mass: "77",
                  gender: "male",
                  homeworld: "https://swapi.dev/api/planets/20/",
                },
              ],
            },
          },
        },
      },
    ];

    const { findByText } = await renderApollo(<People />, {
      mocks,
      cache,
    });

    expect(await findByText(/Obi-Wan/i)).toBeInTheDocument();
  });
});
