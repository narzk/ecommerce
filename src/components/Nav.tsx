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
  transition: all 0.3s ease-in-out;

  @media (max-width: 700px) {
    display: none;
  }
  &:hover {
    border-bottom: 6px solid #fc6f11;
    color: #1d1a1a;
  }
`;
const HamburgerMenu = styled.button`
  flex-direction: column;
  border: none;
  background-color: transparent;
  outline: none;
  display: none;
  margin-right: 5px;

  @media (max-width: 700px) {
    display: flex;
  }
`;
const HamItem = styled.div`
  width: 20px;
  height: 3px;
  background-color: #2c2b2b;
  margin-top: 5px;
`;
interface INavProps {
  navItems: string[];
  title: string;
  humbergerClick: () => void;
}
const Nav: React.FC<INavProps> = ({ navItems, title, humbergerClick }) => {
  const [basket, setBasket] = useState(false);
  const totalBasket = useSelector((state: RootState) => state.counter.basket);

  useEffect(() => {
    setBasket(true);
  }, [totalBasket]);

  return (
    <NavContainer>
      <Container>
        <HamburgerMenu onClick={humbergerClick}>
          <HamItem></HamItem>
          <HamItem></HamItem>
          <HamItem></HamItem>
        </HamburgerMenu>
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
