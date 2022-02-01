import React, { useState } from "react";
import Link from "next/link";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import LoginLayout from "./layout";
import { Wrapper } from "./styles";
import SocialButton from "../socialButton";

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
