import React from "react";
import Image from "next/image";
import { Wrapper } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <div className="wrapper__image">
        <Image
          className="image"
          layout="fill"
          objectPosition="50% 100%"
          objectFit="cover"
          alt="login-image"
          src="/assets/dog.jpg"
        />
      </div>
    </Wrapper>
  );
};

export default Layout;
