import React, { useState } from "react";
import styled from "styled-components";
import imageOne from "../assets/image-product-4.jpg";
import imageTwo from "../assets/image-product-1.jpg";
import imageThree from "../assets/image-product-2.jpg";
import imageSecForth from "../assets/image-product-3.jpg";
import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../feature/counterSlice";
import Previous from "./IconComponents/Previous";
import Next from "./IconComponents/Next";

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
  @media (max-width: 700px) {
    display: none;
  }
`;
const ImageMobile = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0px;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Mobile = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: flex;
  }
`;
const ArrowContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 220px;
  text-align: center;
`;
const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  align-content: center;
  padding: 17px 0px;
  box-sizing: border-box;
  border-radius: 100%;
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
  const images = [imageTwo, imageThree, imageSecForth, imageOne];
  const [index, setIndex] = useState(0);
  const handlePhoto = (dir: string) => {
    if (dir === "pr" && index !== 0) {
      setIndex(index - 1);
      dispatch(setImage(images[index]));
    } else {
      setIndex(3);
    }
    if (dir === "ne" && index !== 3) {
      setIndex(index + 1);
      dispatch(setImage(images[index]));
    } else {
      setIndex(0);
    }
  };
  return (
    <SlideContainer>
      <Image src={image} onClick={handleClick} />
      <Mobile>
        <ImageMobile src={image} />
        <ArrowContainer>
          <IconContainer onClick={() => handlePhoto("pr")}>
            <Previous />
          </IconContainer>
          <IconContainer onClick={() => handlePhoto("ne")}>
            <Next />
          </IconContainer>
        </ArrowContainer>
      </Mobile>

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
