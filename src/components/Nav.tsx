import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-right: 50px;
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
  return (
    <NavContainer>
      <Title>{title}</Title>
      {navItems.map((item) => (
        <Item>{item}</Item>
      ))}
    </NavContainer>
  );
};
export default Nav;
