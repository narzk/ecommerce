import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f7e0cb;
  width: 33px;
  height: 20px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  color: #fc6f11;
  font-weight: bold;
`;

const DiscountBadge: React.FC = () => {
  return <Wrapper>50%</Wrapper>;
};
export default DiscountBadge;
