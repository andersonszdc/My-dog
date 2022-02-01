import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import createPost from "../../services/createPost";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

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

type CreatePostProps = {
  setOpenModal: (arg0: boolean) => void;
};

const PreviewWrapper = styled.div`
  position: relative;
  height: 70vh;
  width: max-content;
  aspect-ratio: 0.8;
`;

const PreviewContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  .perfil {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

const Action = styled.div`
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

const Title = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 16px;
  width: 100%;
  justify-content: space-between;
`;

const Preview = ({ user, src, caption, setCaption }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(e.target.value);
  };
  return (
    <PreviewContainer>
      <PreviewWrapper>
        <Image layout="fill" objectFit="cover" alt="" src={src} />
      </PreviewWrapper>
      <Action>
        <div className="perfil">
          <Image width={32} height={32} alt="" src="/assets/perfil.jpg" />
          <p>{user.displayName}</p>
        </div>
        <textarea
          onChange={handleChange}
          value={caption}
          className="caption"
          placeholder="Escreva uma legenda..."
        />
      </Action>
    </PreviewContainer>
  );
};

const CreatePost = ({ setOpenModal }: CreatePostProps) => {
  const WrapperRef = useRef<HTMLElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<any>(null);
  const [caption, setCaption] = useState("");
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

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
    fileRef.current?.files && setFile(fileRef.current?.files[0]);
  };

  const addPost = async () => {
    await createPost(
      caption,
      user?.displayName!,
      file.name,
      file
    );
    setOpenModal(false);
  };

  return (
    <Background onClick={clickOut}>
      <Wrapper ref={WrapperRef}>
        {!url ? (
          <>
            <Title>
              <h1 className="title">Criar nova publicação</h1>
            </Title>
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
            <Title>
              <Image
                width={24}
                height={24}
                alt=""
                src="/assets/leftArrow.svg"
              />
              <h1 className="title">Criar nova publicação</h1>
              <button onClick={addPost}>Compartilhar</button>
            </Title>
            <Preview
              user={user}
              caption={caption}
              setCaption={setCaption}
              src={url}
            />
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
