import React, { ReactNode } from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  border: 1px solid #fc6f11;
  font-size: 20px;
  color: white;
  padding: 10px 40px;
  border-radius: 10px;
  background-color: #fc6f11;
  cursor: pointer;
  width: 250px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
}
const Button: React.FC<IButtonProps> = ({ children, onClick = () => {} }) => {
  return (
    <ButtonContainer onClick={() => onClick()}>{children}</ButtonContainer>
  );
};
export default Button;
