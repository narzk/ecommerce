import React from "react";
import styled from "styled-components";
import DiscountBadge from "./DiscountBadge";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
  & > div {
    margin-bottom: 20px;
    @media (max-width: 700px) {
      margin-bottom: 15px;
    }
  }
`;
const Title = styled.div`
  color: #fc6f11;
  font-size: 14px;
  font-weight: bold;
`;
const ContentTitle = styled.div`
  color: #1d1a1a;
  font-size: 42px;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 36px;
  }
`;
const Discription = styled.div`
  font-size: 18px;
  font-weight: normal;
  color: #888585;
  width: 80%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Price = styled.div`
  color: #1d1a1a;
  font-size: 30px;
  font-weight: bold;
  margin-right: 30px;
`;
const Discount = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #888585;
  text-decoration-line: line-through;
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Break = styled.br`
  display: block;
  @media (max-width: 700px) {
    display: none;
  }
`;
const DiscountPart = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Content: React.FC = () => {
  return (
    <ContentContainer>
      <Title>SNEAKER COMPANY</Title>
      <ContentTitle>
        Fall Limit &nbsp;
        <Break />
        Sneakers
      </ContentTitle>
      <Discription>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </Discription>
      <DiscountPart>
        <PriceContainer>
          <Price>$ 125.00</Price>
          <DiscountBadge />
        </PriceContainer>
        <Discount>$ 250.00</Discount>
      </DiscountPart>
    </ContentContainer>
  );
};
export default Content;
