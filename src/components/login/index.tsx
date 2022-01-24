import React from "react";
import Link from "next/link";
import styled from "styled-components";

type SocialButtonProps = {
  midia: string;
};

const SocialButton = ({ midia }: SocialButtonProps) => {
  return <button>Sign in with {midia}</button>;
};

const Wrapper = styled.section``;

const Login = () => {
  return (
    <Wrapper>
      <h1>Login</h1>
      <h2>Sign with your credentials</h2>
      <SocialButton midia="Google" />
      <SocialButton midia="Facebook" />
      <form>
        <label htmlFor="">au-mail</label>
        <input type="text" placeholder="dog@gmail.com" />
        <label htmlFor="">password</label>
        <input type="password" placeholder="••••••••" />
        <Link href="#">Forgot password?</Link>
        <input type="submit" value="Login" />
      </form>
      <Link href="#">Don’t have an account? Sign up</Link>
    </Wrapper>
  );
};

export default Login;
