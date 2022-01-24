import React from "react";
import LoginLayout from "../components/loginLayout";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

const Index = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
    >
      <h1>Sign up</h1>
      <Link href="/">Retornar</Link>
    </motion.div>
  );
};

Index.layout = LoginLayout;

export default Index;
