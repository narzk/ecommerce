import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  background-color: white;
  padding: 0px 200px;
`;

const LayOut: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
export default LayOut;
