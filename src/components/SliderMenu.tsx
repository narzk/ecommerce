import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
`;
interface ISider {
  navItems: string[];
}

const SliderMenu: React.FC<ISider> = ({ navItems }) => {
  return (
    <Wrapper>
      {navItems.map((item) => (
        <Item>{item}</Item>
      ))}
    </Wrapper>
  );
};
export default SliderMenu;
