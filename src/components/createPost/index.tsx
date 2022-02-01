import React, { useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Background = styled.div`
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

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  overflow: hidden;

  .title {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }

  .action__close {
    cursor: pointer;
    position: fixed;
    top: 12px;
    right: 12px;
  }

  .upload {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
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

type CreatePostProps = {
  setOpenModal: (arg0: boolean) => void;
};

const PreviewWrapper = styled.div`
  position: relative;
  height: 100%;
  width: max-content;
  aspect-ratio: 0.8;
`;

const Preview = ({ src }: any) => {
  return (
    <PreviewWrapper>
      <Image layout="fill" objectFit="cover" alt="" src={src} />
    </PreviewWrapper>
  );
};

const CreatePost = ({ setOpenModal }: CreatePostProps) => {
  const WrapperRef = useRef<HTMLElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState("");

  const clickOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!WrapperRef.current!.contains(e.target as Node)) {
      setOpenModal(false);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    fileRef.current?.click();
  };

  const handleChange = () => {
    fileRef.current?.files &&
      setUrl(URL.createObjectURL(fileRef.current?.files[0]));
  };

  return (
    <Background onClick={clickOut}>
      <Wrapper ref={WrapperRef}>
        {!url ? (
          <>
            <h1 className="title">Criar nova publicação</h1>
            <main className="upload">
              <Image width={75} height={75} src="/assets/image.svg" alt="" />
              <p>Arraste a foto aqui</p>
              <form className="upload__action">
                <button onClick={handleClick} className="action__btn">
                  Selecionar do computador
                </button>
                <input
                  onChange={handleChange}
                  id="upload__file"
                  type="file"
                  ref={fileRef}
                />
              </form>
            </main>
          </>
        ) : (
          <>
            <h1 className="title">Cortar</h1>
            <Preview src={url} />
          </>
        )}
        <div className="action__close">
          <Image
            onClick={() => setOpenModal(false)}
            width={32}
            height={32}
            src="/assets/close.svg"
            alt=""
          />
        </div>
      </Wrapper>
    </Background>
  );
};

export default CreatePost;
