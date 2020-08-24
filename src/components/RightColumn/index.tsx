import React from "react";

import { Container } from "./styles";
import LoadingTrendingPanel from "../Shimmer/LoadingTrendingPanel";
import TrendingPanel from "./TrendingPanel";

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <>
          <LoadingTrendingPanel />
        </>
      ) : (
        <>
          <TrendingPanel />
          <TrendingPanel />
        </>
      )}
    </Container>
  );
};

export default RightColumn;
