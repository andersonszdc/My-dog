import { getAuth, signOut } from "firebase/auth";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import house from "../../assets/house.svg";
import plus from "../../assets/plus.svg";
import Portal from "../../HOC/Portal";
import CreatePost from "../createPost";

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

const Wrapper = styled(motion.div)`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #ccc;
  margin-bottom: 16px;

  .content {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
  }

  .content__logo {
    font-size: 24px;
  }

  .content__searchBar {
    border: none;
    padding: 8px;
    border-radius: 8px;
    background: url(/magnifier.svg) #f1f1f1 no-repeat scroll 6px 50%;
    padding-left: 36px;
    height: 40px;
  }

  .content__icons {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .icons__item {
    cursor: pointer;
  }
`;

const Header = () => {
  const auth = getAuth();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Wrapper
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <div className="content">
          <span className="content__logo">My-dog</span>
          <input
            className="content__searchBar"
            type="text"
            placeholder="Pesquisar"
          />
          <div className="content__icons">
            <Image className="icons__item" src={house} alt="house_icon" />
            <Image
              className="icons__item"
              onClick={() => setOpenModal(true)}
              src={plus}
              alt="plus_icon"
            />
            <button onClick={() => signOut(auth)}>Sign out</button>
          </div>
        </div>
      </Wrapper>

      {openModal && (
        <Portal modal="createPost">
          <CreatePost setOpenModal={setOpenModal} />
        </Portal>
      )}
    </>
  );
};

export default Header;
