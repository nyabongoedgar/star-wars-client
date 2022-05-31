import React from "react";
import styled from "@emotion/styled";
import { colors, mq } from "../styles";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.jpg";

/**
 * Person Card component renders basic info in a card format
 * for each person populating the people grid homepage.
 */

type PersonCardPropTypes = {
  person: {
    name: string;
  };
  page: number;
}
const PersonCard: React.FC<PersonCardPropTypes> = ({ person, page }) => {
  const { name } = person;

  return (
    <CardContainer>
      <Link to={`people/?search=${name}&prev=${page}`}>
        <CardContent>
          <CardImageContainer>
            <CardImage src={Avatar} alt={name} />
          </CardImageContainer>
          <CardBody>

            <CardFooter>
              <Personal>
                <Name>{name}</Name>
              </Personal>
            </CardFooter>
          </CardBody>
        </CardContent>
      </Link>
    </CardContainer>
  );
};

export default PersonCard;

/** Person Card styled components */
const CardContainer = styled("div")({
  borderRadius: 6,
  color: colors.text,
  backgroundSize: "cover",
  backgroundColor: "white",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [mq[0]]: {
    width: "90%",
  },
  [mq[1]]: {
    width: "47%",
  },
  [mq[2]]: {
    width: "31%",
  },
  height: 380,
  margin: 10,
  overflow: "hidden",
  position: "relative",
  ":hover": {
    //@ts-ignore
    backgroundColor: colors.pink,
  },
  cursor: "pointer",
  textDecoration: "none",
});

const CardContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
});

const CardImageContainer = styled.div({
  height: 220,
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(250,0,150,0.20)",
  },
});

const CardImage = styled.img({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  filter: "grayscale(60%)",
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: "flex",
  color: colors.textSecondary,
  flexDirection: "column",
  justifyContent: "space-around",
});

const CardFooter = styled.div({
  display: "flex",
  flexDirection: "row",
});

const Personal = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const Name = styled.div({
  lineHeight: "1em",
  fontSize: "1.1em",
});