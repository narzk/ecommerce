import React, { ReactElement, useState } from "react";
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
import SliderMenu from "../components/SliderMenu";

const Header = styled.div`
  border-bottom: 3px solid #ccc;
  height: 100px;

  @media (max-width: 700px) {
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr;
    height: 60px;
    padding: 0px 10px;
  }
`;
const BodyContainer = styled.div`
  background-color: white;
  padding: 50px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    padding: 0px 10px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    > div {
      margin-bottom: 10px;
    }
  }
  justify-content: space-between;
`;

const DetailsPage: React.FC = () => {
  const naItems = ["Collections", "Men", "Women", "About", "Contanct"];
  const dispatch = useDispatch();
  const { open, toggle } = useDialog();
  const [humberger, setHumberger] = useState(false);
  const [photo, setPhoto] = useState(false);

  return (
    <LayOut>
      {open && !humberger ? (
        <Dialog handleClose={toggle}>
          <Slider />
        </Dialog>
      ) : (
        open &&
        !photo && (
          <Dialog handleClose={toggle}>
            <SliderMenu navItems={naItems} />
          </Dialog>
        )
      )}
      <Header>
        <Nav
          navItems={naItems}
          title="Sneakers"
          humbergerClick={() => {
            setHumberger(true);
            toggle();
          }}
        />
      </Header>
      <BodyContainer>
        <ImageContainer>
          <Slider
            handleClick={() => {
              setPhoto(true);
              toggle();
            }}
          />
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
