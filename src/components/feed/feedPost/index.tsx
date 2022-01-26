import React from "react";
import Image from "next/image";
import perfil from "../../../assets/perfil.jpg";
import post from "../../../assets/post.jpg";
import heart from "../../../assets/heart.svg";
import plane from "../../../assets/plane.svg";
import chat from "../../../assets/chat.svg";
import smile from "../../../assets/smile.svg";
import styled from "styled-components";
import { getPostTime } from "../../../services/getPostTime";

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

const FeedPost = ({data}: any) => {
  return (
    <Wrapper>
      <div className="header">
        <Image src={perfil} alt="user_image" />
        <p>{data.name}</p>
        <p>{getPostTime(data.data.seconds)}</p>
      </div>
      <Image src={post} alt="post_image" />
      <div className="interaction">
        <div className="interaction__icons">
          <Image className="icons__item" src={heart} alt="heart_icon" />
          <Image className="icons__item" src={chat} alt="chat_icon" />
          <Image className="icons__item" src={plane} alt="plane_icon" />
        </div>
        <div>
          <p>{data.name} {data.caption}</p>
        </div>
        <span>View all 30 comments</span>
      </div>
      <div className="comment">
        <Image src={smile} alt="plane_icon" />
        <input
          className="comment__input"
          type="text"
          placeholder="Add a comment..."
        />
        <button>Publish</button>
      </div>
    </Wrapper>
  );
};

export default FeedPost;
