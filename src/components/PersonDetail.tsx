//@ts-nocheck
import React from "react";
import styled from "@emotion/styled";
import ContentSection from "./content-section";

/**
 * Person Detail component renders the main content of a given Person:
 * author, length, number of views, modules list, among other things.
 * It provides access to the first module of the Person.
 */

type PersonType = {
  person: [
    {
      name: string;
      mass: string;
      height: string;
      gender: string;
    }
  ]
}
const PersonDetail: React.FC<PersonType> = ({ person }) => {
  return (
    <ContentSection>
      {person.map((item: any, key: any) => (
        <PersonDetails key={key}>
          <DetailRow>
            <DetailItem>
              <h4>Name</h4>
            </DetailItem>
            <DetailItem>
              <h4>{item.name}</h4>
            </DetailItem>
          </DetailRow>
          <DetailRow>
            <DetailItem>
              <h4>Height</h4>
            </DetailItem>
            <DetailItem>
              <h4>{item.height}</h4>
            </DetailItem>
          </DetailRow>
          <DetailRow>
            <DetailItem>
              <h4>Mass</h4>
            </DetailItem>
            <DetailItem>
              <h4>{item.mass}</h4>
            </DetailItem>
          </DetailRow>
          <DetailRow>
            <DetailItem>
              <h4>Gender</h4>
            </DetailItem>
            <DetailItem>
              <h4>{item.gender}</h4>
            </DetailItem>
          </DetailRow>
          <DetailRow>
            <DetailItem>
              <h4>Home world</h4>
            </DetailItem>
            <DetailItem>
              <h4>{item.homeworld}</h4>
            </DetailItem>
          </DetailRow>
          
        </PersonDetails>
      ))}
    </ContentSection>
  );
};

export default PersonDetail;

/** Person detail styled components */

const PersonDetails = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: `solid 1px #f6f1f1`,
  backgroundColor: "white",
  h1: {
    width: "100%",
    textAlign: "center",
    marginBottom: 5,
  },
  h4: {
    fontSize: "1.2em",
    marginBottom: 5,
    color: "black",
  },
});

const DetailRow = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: `solid 1px darkgray`,
});

const DetailItem = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  color: "black",
  alignSelf: "center",
});
