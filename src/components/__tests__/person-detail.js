import React from "react";
import { render, cleanup } from "../../utils/test-utils";
import PersonDetail from "../PersonDetail";

const mockPerson = {
  data: {
    person: {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: "Raymus Antilles",
          height: "188",
          mass: "79",
          gender: "male",
          homeworld: "https://swapi.dev/api/planets/2/",
        },
      ],
    },
  },
};

describe("Person Detail View", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    render(<PersonDetail person={mockPerson.data.person.results} />);
  });
});
