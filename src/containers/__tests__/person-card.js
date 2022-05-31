/* eslint-disable testing-library/prefer-find-by */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { renderApollo, cleanup } from "../../utils/test-utils";
import PersonCard from "../PersonCard";

const mockPersonCard = {
  name: "Raymus Antilles",
  height: "188",
  mass: "79",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/2/",
};

describe("Person Card", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders person Card", async () => {
    const mocks = [];
    const { findByText } = await renderApollo(
      <PersonCard person={mockPersonCard} />,
      {
        mocks,
        resolvers: {},
        addTypename: false,
      }
    );
    expect(await findByText(/Raymus Antilles/i)).toBeInTheDocument();
  });
});
