import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { getPostTime } from "../../../services/getPostTime";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../utils/firebaseConfig";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};

  .header {
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 16px;
  }

  .postImage {
    width: 100%;
    aspect-ratio: 0.8;
    position: relative;
  }

  .interaction {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  .interaction__icons {
    display: flex;
    gap: 12px;
  }

  .icons__item {
    cursor: pointer;
  }

  .interaction__username {
    font-weight: 600;
  }

  .comment {
    display: flex;
    padding: 16px;
    border-top: 1px solid #ccc;
  }

  .comment__input {
    width: 100%;
    border: none;
    padding-left: 16px;
  }
`;

const Skeleton = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeedPost = ({ data }: any) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [url, setUrl] = useState<string>();
  const dogRef = ref(storage, data.image);

  useEffect(() => {
    getDownloadURL(dogRef)
      .then((url) => setUrl(url))
      .catch((error) => console.log(error));
  });

  return url ? (
    <Wrapper>
      <div className="header">
        <Image
          height={24}
          width={24}
          src="/assets/perfil.jpg"
          alt="user_image"
        />
        <p>{data.name}</p>
        <p>{getPostTime(data.data.seconds)}</p>
      </div>
      <div className="postImage">
        {loadingImage && <Skeleton>loading...</Skeleton>}
        <Image
          layout="fill"
          objectFit="cover"
          src={url}
          alt="post_image"
          onLoadingComplete={() => setLoadingImage(false)}
        />
      </div>
      <div className="interaction">
        <div className="interaction__icons">
          <Image
            height={24}
            width={24}
            className="icons__item"
            src="/assets/heart.svg"
            alt="heart_icon"
          />
          <Image
            height={24}
            width={24}
            className="icons__item"
            src="/assets/chat.svg"
            alt="chat_icon"
          />
          <Image
            height={24}
            width={24}
            className="icons__item"
            src="/assets/plane.svg"
            alt="plane_icon"
          />
        </div>
        <p>
          <span className="interaction__username">{data.name}</span>{" "}
          {data.caption}
        </p>
        <span>View all 30 comments</span>
      </div>
      <div className="comment">
        <Image
          height={24}
          width={24}
          src="/assets/smile.svg"
          alt="smile_icon"
        />
        <input
          className="comment__input"
          type="text"
          placeholder="Add a comment..."
        />
        <button>Publish</button>
      </div>
    </Wrapper>
  ) : (
    <div>loading...</div>
  );
};

export default FeedPost;
