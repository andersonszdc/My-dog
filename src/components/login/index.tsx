import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import LoginLayout from "./loginLayout";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

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
  const auth = getAuth();
  const router = useRouter();
  const srcLogo = midia == "Facebook" ? "facebook" : "google";
  const provider = midia == "Facebook" ? facebookProvider : googleProvider;

  const signIn = () => {
    signInWithPopup(auth, provider).then(() => {
      router.push("platform");
    });
  };

  return (
    <SocialButtonStyled onClick={signIn}>
      <Image height={24} width={24} alt="icon" src={`/assets/${srcLogo}.svg`} />
      Sign in with {midia}
    </SocialButtonStyled>
  );
};

export const Wrapper = styled(motion.section)`
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
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

const Login = () => {
  const auth = getAuth();
  const router = useRouter();
  const [{ email, password }, setCredential] = useState({
    email: "",
    password: "",
  });

  const signInWithPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCredential((s) => ({ ...s, [name]: value }));
  };

  return (
    <Wrapper
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
      <form className="formCredential" onSubmit={signInWithPassword}>
        <label className="formCredential__label">
          au-mail
          <input
            type="text"
            placeholder="dog@gmail.com"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label className="formCredential__label">
          password
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <Link href="/forget">
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

Login.layout = LoginLayout;

export default Login;
