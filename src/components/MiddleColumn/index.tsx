import React from "react";

import { Container } from "./styles";

import LoadingFeedShare from "../Shimmer/LoadingFeedShare";
import LoadingFeedPost from "../Shimmer/LoadingFeedPost";

import FeedShare from "./FeedShare";
import FeedPost from "./FeedPost";

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
