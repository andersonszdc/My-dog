import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

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
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        Home
      </motion.div>
      <button onClick={() => signOut(auth)}>Sign out</button>
    </>
  );
};

export default Index;
