import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Feed from "../components/feed";
import Header from "../components/header";

const Index = () => {
  const router = useRouter();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <>
      <Header />
      <Feed />
    </>
  );
};

export default Index;
