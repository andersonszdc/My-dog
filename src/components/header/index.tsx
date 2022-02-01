import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import Image from "next/image";
import Portal from "../../HOC/Portal";
import CreatePost from "../createPost";
import { Wrapper } from "./styles";

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

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
            <Image
              height={24}
              width={24}
              className="icons__item"
              src="/assets/house.svg"
              alt="house_icon"
            />
            <Image
              height={24}
              width={24}
              className="icons__item"
              onClick={() => setOpenModal(true)}
              src="/assets/plus.svg"
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
