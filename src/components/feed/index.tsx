import { DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPosts } from "../../services/getPosts";
import FeedPost from "./feedPost";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 500px;
  margin: 0 auto;
`;

const Feed = () => {
  const [posts, setPosts] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      setPosts(await getPosts());
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      {posts?.map((post: any, index: number) => (
        <FeedPost data={post} key={index} />
      ))}
    </Wrapper>
  );
};

export default Feed;
