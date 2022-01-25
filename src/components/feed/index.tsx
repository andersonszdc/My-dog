import React from "react";
import styled from "styled-components";
import FeedPost from "./feedPost";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 500px;
  margin: 0 auto;
`;

const Feed = () => {
  return (
    <Wrapper>
      <FeedPost />
    </Wrapper>
  );
};

export default Feed;
