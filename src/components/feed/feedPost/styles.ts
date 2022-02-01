import styled from "styled-components";

export const Wrapper = styled.div`
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

export const Skeleton = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;