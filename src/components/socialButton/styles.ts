import styled from "styled-components";

export const SocialButtonStyled = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;