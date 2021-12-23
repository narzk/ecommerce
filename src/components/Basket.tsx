import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../app/store";
import { decrement, increment } from "../feature/counterSlice";
import BasketCart from "./BasketCart";
import Button from "./Button";
import Minus from "./IconComponents/Minus";
import Plus from "./IconComponents/Plus";

const BasketContainer = styled.div`
  width: 250px;
  height: 150px;
  position: absolute;
  background-color: white;
  border-radius: 12px;
  top: 70px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px 20px;
  direction: ltr;
`;
const BasketTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  padding-bottom: 15px;
`;
const EmptyBasket = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #ccc;
  padding-bottom: 15px;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;
const Basket: React.FC = () => {
  const totalBasket = useSelector((state: RootState) => state.counter.basket);
  const dispatch = useDispatch();

  return (
    <BasketContainer>
      <BasketTitle>Cart</BasketTitle>
      {totalBasket !== 0 ? (
        <>
          <BasketCart />
          <ButtonContainer>
            <Button>Checkout</Button>
          </ButtonContainer>
        </>
      ) : (
        <EmptyBasket>Your Cart is Empty</EmptyBasket>
      )}
    </BasketContainer>
  );
};
export default Basket;
