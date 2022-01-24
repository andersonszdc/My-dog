import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import facebookLogo from "../../assets/facebook.svg";
import googleLogo from "../../assets/google.svg";
import { motion } from "framer-motion";

type SocialButtonProps = {
  midia: string;
};

const SocialButtonStyled = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const SocialButton = ({ midia }: SocialButtonProps) => {
  const srcLogo = midia == "Facebook" ? facebookLogo : googleLogo;
  return (
    <SocialButtonStyled>
      <Image alt="icon" src={srcLogo} />
      Sign in with {midia}
    </SocialButtonStyled>
  );
};

const Wrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  justify-content: center;

  .title {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .subtitle {
    font-size: 14px;
    font-weight: 400;
  }

  .socialButtons {
    display: flex;
    gap: 24px;
    flex-direction: column;
    padding: 32px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  .formCredential {
    margin: 32px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .formCredential__label {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .formCredential__label input {
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 8px;
    padding: 8px;
  }

  .formCredential__forget {
    text-align: right;
  }

  .formCredential__action {
    border: none;
    border-radius: 8px;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;

    ${({ theme }) => `
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.white};
    `}
  }

  .signUp {
    text-align: center;
  }
`;

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Login = () => {
  return (
    <Wrapper
      key="login"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
    >
      <h1 className="title">Login</h1>
      <h2 className="subtitle">Sign with your credentials</h2>
      <div className="socialButtons">
        <SocialButton midia="Google" />
        <SocialButton midia="Facebook" />
      </div>
      <form className="formCredential">
        <label className="formCredential__label">
          au-mail
          <input type="text" placeholder="dog@gmail.com" />
        </label>
        <label className="formCredential__label">
          password
          <input type="password" placeholder="••••••••" />
        </label>
        <Link href="#">
          <a className="formCredential__forget">Forgot password?</a>
        </Link>
        <input className="formCredential__action" type="submit" value="Login" />
      </form>
      <Link href="/signUp">
        <a className="signUp">Don’t have an account? Sign up</a>
      </Link>
    </Wrapper>
  );
};

export default Login;
