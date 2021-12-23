import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../app/store";
import imageOne from "../assets/image-product-4.jpg";

const CardContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-left: 20px;
`;

const Title = styled.div`
  font-size: 12px;
`;

const Price = styled.div``;

const BasketCart: React.FC = () => {
  const totalBasket = useSelector((state: RootState) => state.counter.basket);

  const dispatch = useDispatch();
  return (
    <CardContainer>
      <Image src={imageOne} />
      <Content>
        <Title>Fall Limited Edition Sneakers</Title>
        <Price>
          {
            <>
              $125.00 X {totalBasket} <b>${totalBasket * 125}.00</b>
            </>
          }
        </Price>
      </Content>
    </CardContainer>
  );
};
export default BasketCart;
