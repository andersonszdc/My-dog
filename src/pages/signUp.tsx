import React, { useState } from "react";
import LoginLayout from "../components/login/layout";
import Link from "next/link";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { Wrapper } from "../components/login/styles";

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

const Index = () => {
  const auth = getAuth();
  const router = useRouter();
  const [{ email, password }, setCredential] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCredential((s) => ({ ...s, [name]: value }));
  };

  const createUser = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <Wrapper
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
    >
      <h1 className="title">Sign up</h1>
      <h2 className="subtitle">Create your account</h2>
      <form className="formCredential" onSubmit={createUser}>
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
        <input
          className="formCredential__action"
          type="submit"
          value="Sign up"
        />
      </form>
      <Link href="/">Already have an account? Sign in</Link>
    </Wrapper>
  );
};

Index.layout = LoginLayout;

export default Index;
