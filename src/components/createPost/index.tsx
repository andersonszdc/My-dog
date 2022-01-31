import React, { useRef } from "react";
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
  height: 70vh;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
`;

type CreatePostProps = {
  setOpenModal: (arg0: boolean) => void;
};

const CreatePost = ({ setOpenModal }: CreatePostProps) => {
  const WrapperRef = useRef<HTMLElement>(null);

  const clickOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!WrapperRef.current!.contains(e.target as Node)) {
      setOpenModal(false);
    }
  };

  return (
    <Background onClick={clickOut}>
      <Wrapper ref={WrapperRef}>
        <h1>Criar nova publicação</h1>
        <Image width={75} height={75} src="/assets/image.svg" alt="" />
        <p>Arraste a foto aqui</p>
        <button>Selecionar do computador</button>
        <Image
          onClick={() => setOpenModal(false)}
          width={32}
          height={32}
          src="/assets/close.svg"
          alt=""
        />
      </Wrapper>
    </Background>
  );
};

export default CreatePost;
