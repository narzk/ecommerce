import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  background-color: white;
  padding: 0px 200px;
  @media (max-width: 700px) {
    padding: 0px;
    grid-template-columns: 1fr;
    gap: 0px;
  }
`;

const LayOut: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
export default LayOut;
