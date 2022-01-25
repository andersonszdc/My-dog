import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Login from "../components/login";
import LoginLayout from "../components/loginLayout";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/platform");
    }
  }, [router, session]);

  return <Login />;
}

Home.layout = LoginLayout;
