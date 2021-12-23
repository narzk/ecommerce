import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../app/store";
import Basket from "./Basket";
import Cart from "./IconComponents/Cart";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-right: 50px;
`;
const CartContainer = styled.div`
  flex: 1;
  /* margin-left: 100px; */
  direction: rtl;
  cursor: pointer;
`;
const BasketItems = styled.div`
  position: absolute;
  background-color: #fc6f11;
  border-radius: 100%;
  font-size: 12px;
  padding: 1px 3px;
  color: white;
  top: 30px;
  right: 10px;
`;
const Item = styled.div`
  display: flex;
  padding: 39px 10px 34px 10px;
  font-size: 18px;
  color: #888585;
  cursor: pointer;
  border-bottom: 6px solid transparent;

  &:hover {
    border-bottom: 6px solid #fc6f11;
    color: #1d1a1a;
  }
`;
interface INavProps {
  navItems: string[];
  title: string;
}
const Nav: React.FC<INavProps> = ({ navItems, title }) => {
  const [basket, setBasket] = useState(false);
  const totalBasket = useSelector((state: RootState) => state.counter.basket);

  useEffect(() => {
    setBasket(true);
  }, [totalBasket]);

  return (
    <NavContainer>
      <Container>
        <Title>{title}</Title>
        {navItems.map((item) => (
          <Item>{item}</Item>
        ))}
      </Container>
      <CartContainer>
        <div onClick={() => setBasket(!basket)}>
          {totalBasket !== 0 && <BasketItems>{totalBasket}</BasketItems>}
          <Cart />
        </div>
        {basket && <Basket />}
      </CartContainer>
    </NavContainer>
  );
};
export default Nav;
