import React from "react";
import { parse } from "query-string";
import { useLocation, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import PersonDetail from "../components/PersonDetail";

/** GET_PERSON gql query to retrieve a specific track by its ID */
export const GET_PERSON = gql`
  query Person($name: String!) {
    person(name: $name) {
      count
      next
      previous
      results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;

/**
 * Person Page fetches a track's data from the gql query GET_PERSON
 * and provides it to the PersonDetail component to display
 */
const Person = () => {
  const { search } = useLocation();
  const searchParams = parse(search);
  const { search: searchName, prev } = searchParams;
  const { loading, error, data } = useQuery(GET_PERSON, {
    variables: { name: searchName },
  });



  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <Link to={"/"} state={{ prev }}>Back</Link>
        {/* @ts-ignore */}
        <PersonDetail person={data?.person?.results} />
      </QueryResult>
    </Layout >
  );

};

export default Person;
