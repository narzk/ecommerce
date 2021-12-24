import React from "react";
import styled from "styled-components";
import imageOne from "../assets/image-product-4.jpg";
import imageTwo from "../assets/image-product-1.jpg";
import imageThree from "../assets/image-product-2.jpg";
import imageSecForth from "../assets/image-product-3.jpg";
import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../feature/counterSlice";

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
  cursor: pointer;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SmallImage = styled.img`
  width: 12%;
  height: 12%;
  border-radius: 10px;
  margin-left: 20px;
  cursor: pointer;
  border: 2px solid transparent;

  &:first-child {
    margin-left: 0px;
  }
  &:hover {
    border: 2px solid #fc6f11;
  }
`;
interface Islider {
  handleClick?: () => void;
}
const Slider: React.FC<Islider> = ({ handleClick }) => {
  const image = useSelector((state: RootState) => state.counter.image);
  const dispatch = useDispatch();
  return (
    <SlideContainer>
      <Image src={image} onClick={handleClick} />
      <ImageContainer>
        <SmallImage
          src={imageTwo}
          onClick={() => dispatch(setImage(imageTwo))}
        />
        <SmallImage
          src={imageThree}
          onClick={() => dispatch(setImage(imageThree))}
        />
        <SmallImage
          src={imageSecForth}
          onClick={() => dispatch(setImage(imageSecForth))}
        />
        <SmallImage
          src={imageOne}
          onClick={() => dispatch(setImage(imageOne))}
        />
      </ImageContainer>
    </SlideContainer>
  );
};
export default Slider;
