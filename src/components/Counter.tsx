import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../app/store";
import { decrement, increment } from "../feature/counterSlice";
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
  @media (max-width: 700px) {
    width: auto;
  }
`;
const PlusMinusButton = styled.div`
  display: flex;
  align-items: center;
`;

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <PlusMinusButton onClick={() => dispatch(increment())}>
        <Plus />
      </PlusMinusButton>
      <span>{count}</span>

      <PlusMinusButton onClick={() => dispatch(decrement())}>
        <Minus />
      </PlusMinusButton>
    </Wrapper>
  );
};
export default Counter;
