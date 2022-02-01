import React, { useRef, useState } from "react";
import Image from "next/image";
import createPost from "../../services/createPost";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import {
  Action,
  Background,
  PreviewContainer,
  PreviewWrapper,
  Title,
  Wrapper,
} from "./styles";

type CreatePostProps = {
  setOpenModal: (arg0: boolean) => void;
};

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
    await createPost(caption, user?.displayName!, file.name, file);
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
