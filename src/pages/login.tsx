import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Login from "../components/login";
import LoginLayout from "../components/login/loginLayout";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const router = useRouter();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return <Login />;
}

Home.layout = LoginLayout;
