import React, { ReactElement } from "react";
import styled from "styled-components";
import Content from "../components/Content";
import Counter from "../components/Counter";
import LayOut from "../components/LayOut";
import Nav from "../components/Nav";
import Slider from "../components/Slider";

const Header = styled.div`
  border-bottom: 3px solid #ccc;
  height: 100px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
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
const AddToBasketButton = styled.button`
  border: 1px solid #fc6f11;
  font-size: 20px;
  color: white;
  padding: 10px 40px;
  border-radius: 10px;
  background-color: #fc6f11;
  cursor: pointer;
`;

interface ILayOutProps {
  childern?: ReactElement;
}
const DetailsPage: React.FC<ILayOutProps> = () => {
  const naItems = ["Collections", "Men", "Women", "About", "Contanct"];
  return (
    <LayOut>
      <Header>
        <Nav navItems={naItems} title="Sneakers" />
      </Header>
      <BodyContainer>
        <ImageContainer>
          <Slider />
        </ImageContainer>
        <ContentContainer>
          <Content />
          <ButtonContainer>
            <Counter />
            <AddToBasketButton>Add to Basket</AddToBasketButton>
          </ButtonContainer>
        </ContentContainer>
      </BodyContainer>
    </LayOut>
  );
};
export default DetailsPage;
