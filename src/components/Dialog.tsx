import React, { useState } from "react";
import styled from "styled-components";
import Close from "./IconComponents/Close";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5000000;
`;
const Container = styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  top: 20vh;
  left: 400px;
  z-index: 10000000;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Header = styled.div`
  position: absolute;
  top: -20px;
  left: 445px;
  cursor: pointer;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Menu = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;

    position: absolute;
    width: 40%;
    height: 100vh;
    background-color: white;
    padding: 80px 30px;
    z-index: 10000000;
  }
`;
const HeaderMenu = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: block;

    position: absolute;
    top: 30px;
    left: 20px;
    cursor: pointer;
  }
`;
interface IDialog {
  handleClose: () => void;
}
const Dialog: React.FC<IDialog> = ({ children, handleClose }) => {
  return (
    <>
      <Container>
        <Header onClick={handleClose}>
          <Close />
        </Header>
        {children}
      </Container>
      <Menu>
        <HeaderMenu onClick={handleClose}>
          <Close />
        </HeaderMenu>
        {children}
      </Menu>
      <Wrapper onClick={handleClose}></Wrapper>
    </>
  );
};
export default Dialog;

export const useDialog = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return { open, toggle };
};
