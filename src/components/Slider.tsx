import React from "react";
import styled from "styled-components";
import imageOne from "../assets/image-product-4.jpg";
import imageTwo from "../assets/image-product-1.jpg";
import imageThree from "../assets/image-product-2.jpg";
import imageSecForth from "../assets/image-product-3.jpg";

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 60%;
  height: 70%;
  border-radius: 12px;
  margin-bottom: 30px;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SmallImage = styled.img`
  width: 14%;
  height: 14%;
  border-radius: 10px;
  margin-left: 6px;
  cursor: pointer;
`;
const Slider: React.FC = () => {
  return (
    <SlideContainer>
      <Image src={imageOne} />
      <ImageContainer>
        <SmallImage src={imageTwo} />
        <SmallImage src={imageThree} />
        <SmallImage src={imageSecForth} />
        <SmallImage src={imageOne} />
      </ImageContainer>
    </SlideContainer>
  );
};
export default Slider;
