import React from "react";
import styled from "styled-components";
import DiscountBadge from "./DiscountBadge";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    margin-bottom: 20px;
  }
  /* border: 1px solid black; */
`;
const Title = styled.div`
  color: #fc6f11;
  font-size: 20px;
  font-weight: bold;
`;
const ContentTitle = styled.div`
  color: #1d1a1a;
  font-size: 72px;
  font-weight: bold;
`;
const Discription = styled.div`
  font-size: 24px;
  font-weight: normal;
  color: #888585;
  width: 80%;
`;
const Price = styled.div`
  color: #1d1a1a;
  font-size: 40px;
  font-weight: bold;
  margin-right: 30px;
`;
const Discount = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #888585;
  text-decoration-line: line-through;
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Content: React.FC = () => {
  return (
    <ContentContainer>
      <Title>Sneaker Company</Title>
      <ContentTitle>
        Fall Limit
        <br />
        Sneakers
      </ContentTitle>
      <Discription>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </Discription>
      <PriceContainer>
        <Price>$ 125.00</Price>
        <DiscountBadge />
      </PriceContainer>
      <Discount>$ 250.00</Discount>
    </ContentContainer>
  );
};
export default Content;
