import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  justify-content: center;

  .title {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .subtitle {
    font-size: 14px;
    font-weight: 400;
  }

  .socialButtons {
    display: flex;
    gap: 24px;
    flex-direction: column;
    padding: 32px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  .formCredential {
    margin: 32px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .formCredential__label {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .formCredential__label input {
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 8px;
    padding: 8px;
  }

  .formCredential__forget {
    text-align: right;
  }

  .formCredential__action {
    border: none;
    border-radius: 8px;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;

    ${({ theme }) => `
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.white};
    `}
  }

  .signUp {
    text-align: center;
  }
`;