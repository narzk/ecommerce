import React from "react";
import styled from "styled-components";
import Minus from "./IconComponents/Minus";
import Plus from "./IconComponents/Plus";

const Wrapper = styled.div`
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: #e4e3e3;
  width: 110px;
  cursor: pointer;
  > span {
    cursor: default;
    font-size: 25px;
  }
`;

const Counter: React.FC = () => {
  return (
    <Wrapper>
      <Minus />
      <span>0</span>
      <Plus />
    </Wrapper>
  );
};
export default Counter;
