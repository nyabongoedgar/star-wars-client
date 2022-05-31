import React from "react";
import styled from "@emotion/styled";
import { MetroSpinner } from "react-spinners-kit";

type QueryResultPropTypes = {
  loading: boolean;
  error: any;
  children: any;
  data: any;
}
/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult: React.FC<QueryResultPropTypes> = ({ loading, error, data, children }): any => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <div data-testid="spinner">
        <SpinnerContainer>
          <MetroSpinner size={60} loading={loading} color="#a9a9a9" />
        </SpinnerContainer>
      </div>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;

/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});
