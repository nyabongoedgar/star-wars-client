import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import PersonCard from "../containers/PersonCard";
import { Layout, QueryResult } from "../components";

/** PEOPLE gql query to retreive all PEOPLE */
export const PEOPLE = gql`
  query Query($page: Int!) {
    people(page: $page) {
      count
      next
      previous
      results {
        gender
        height
        homeworld
        mass
        name
      }
    }
  }
`;

/**
 * People page is the home page.
 * We display a grid of people fetched with useQuery with the PEOPLE query
 */
type PersonCardPropTypes = {
  name: string;
  mass: string;
  height: string;
  homeworlds: string;
}

const People = () => {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data } = useQuery(PEOPLE, {
    variables: { page }
  });
  return (
    <>
      <Layout grid>
        <QueryResult error={error} loading={loading} data={data}>
          {data?.people?.results?.map((person: PersonCardPropTypes, key: number) => (
            <PersonCard key={key} page={page} person={person} />
          ))}

          <PaginationContainer>
            <Button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </Button>
            <span>Page: {page}</span>
            <Button
              disabled={data?.people?.next === null}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </PaginationContainer>
        </QueryResult>
      </Layout>
    </>
  );
};

const PaginationContainer = styled.div({
  padding: 18,
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: 'end'
});

const Button = styled.button({
  background: "pink",
  borderRadius: 5,
  width: 50,
  height: 50,
  cursor: "pointer"
});

export default People;
