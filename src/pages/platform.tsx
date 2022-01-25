import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [router, session]);

  return (
    <>
      <div>Home</div>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Index;
