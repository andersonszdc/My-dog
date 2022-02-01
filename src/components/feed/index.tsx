import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/getPosts";
import FeedPost from "./feedPost";
import { Container } from "./styles";

const Feed = () => {
  const [posts, setPosts] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      setPosts(await getPosts());
    };
    fetchData();
  }, []);

  return (
    <Container>
      {posts?.map((post: any, index: number) => (
        <FeedPost data={post} key={index} />
      ))}
    </Container>
  );
};

export default Feed;
