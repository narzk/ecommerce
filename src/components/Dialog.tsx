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
`;
const Header = styled.div`
  position: absolute;
  top: -20px;
  left: 445px;
  cursor: pointer;
`;
interface IDialog {
  handleClose: () => void;
}
const Dialog: React.FC<IDialog> = ({ children, handleClose }) => {
  return (
    <Wrapper>
      <Container>
        <Header onClick={handleClose}>
          <Close />
        </Header>

        {children}
      </Container>
    </Wrapper>
  );
};
export default Dialog;

export const useDialog = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  console.log("open", open);
  return { open, toggle };
};
