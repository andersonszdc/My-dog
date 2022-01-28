import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
  modal: string;
};

const Portal = ({ children, modal }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        children,
        document.querySelector(`#${modal}`) as HTMLDivElement
      )
    : null;
};

export default Portal;
