import styled from "styled-components";

export const Background = styled.div`
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  overflow: hidden;

  .title {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  .action__close {
    cursor: pointer;
    position: fixed;
    top: 12px;
    right: 12px;
  }

  .upload {
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .upload__action {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .action__btn {
    font-weight: 500;
    border: none;
    width: 50%;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  #upload__file {
    display: none;
  }
`;

export const PreviewWrapper = styled.div`
  position: relative;
  height: 70vh;
  width: max-content;
  aspect-ratio: 0.8;
`;

export const PreviewContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  .perfil {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const Action = styled.div`
  .perfil {
    padding: 16px;
  }

  .caption {
    padding: 0 16px;
    border: none;
    resize: none;
    width: 360px;
    height: 120px;
    :focus {
      outline: none;
    }
    border-bottom: 1px solid #ccc;
  }
`;

export const Title = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 16px;
  width: 100%;
  justify-content: space-between;
`;