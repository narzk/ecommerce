import React, { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToBasket } from "../feature/counterSlice";

import Content from "../components/Content";
import Counter from "../components/Counter";
import LayOut from "../components/LayOut";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Button from "../components/Button";
import Dialog, { useDialog } from "../components/Dialog";

const Header = styled.div`
  border-bottom: 3px solid #ccc;
  height: 100px;
  /* display: flex;
  align-items: center;
  box-sizing: border-box; */
`;
const BodyContainer = styled.div`
  background-color: white;
  /* border: 1px solid black; */
  padding: 50px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
const ImageContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  align-content: center;
`;
const ContentContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

interface ILayOutProps {
  childern?: ReactElement;
}
const DetailsPage: React.FC<ILayOutProps> = () => {
  const naItems = ["Collections", "Men", "Women", "About", "Contanct"];
  const dispatch = useDispatch();
  const { open, toggle } = useDialog();
  useEffect(() => {
    console.log("openopen", open);
  }, [open]);
  return (
    <LayOut>
      {open && (
        <Dialog handleClose={toggle}>
          <Slider />
        </Dialog>
      )}
      <Header>
        <Nav navItems={naItems} title="Sneakers" />
      </Header>
      <BodyContainer>
        <ImageContainer>
          <Slider handleClick={toggle} />
        </ImageContainer>
        <ContentContainer>
          <Content />
          <ButtonContainer>
            <Counter />
            <Button onClick={() => dispatch(addToBasket())}>
              Add to Basket
            </Button>
          </ButtonContainer>
        </ContentContainer>
      </BodyContainer>
    </LayOut>
  );
};
export default DetailsPage;
