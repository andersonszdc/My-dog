import Login from "../components/login";
import LoginLayout from "../components/loginLayout";

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}

Home.layout = LoginLayout;
