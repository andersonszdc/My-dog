import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #ccc;
  margin-bottom: 16px;

  .content {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
  }

  .content__logo {
    font-size: 24px;
  }

  .content__searchBar {
    border: none;
    padding: 8px;
    border-radius: 8px;
    background: url(/assets/magnifier.svg) #f1f1f1 no-repeat scroll 6px 50%;
    padding-left: 36px;
    height: 40px;
  }

  .content__icons {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .icons__item {
    cursor: pointer;
  }
`;