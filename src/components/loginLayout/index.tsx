import React from "react";
import Image from "next/image";
import dog from "../../assets/dog.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  .wrapper__image {
    position: relative;
  }
  
  .image {
    object-fit: cover;
  }
`

const LoginLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <div className="wrapper__image">
        <Image className="image" layout="fill" objectPosition="50% 100%" objectFit="cover" alt="login-image" src={dog} />
      </div>
    </Wrapper>
  );
};

export default LoginLayout;
