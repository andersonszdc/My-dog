import React from "react";
import Image from "next/image";
import dog from "../../assets/dog.jpg";

const LoginLayout: React.FC = ({ children }) => {
  return (
    <div>
      {children}
      <div>
        <Image alt="login-image" src={dog} />
      </div>
    </div>
  );
};

export default LoginLayout;
