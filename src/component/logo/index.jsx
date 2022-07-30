import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/image.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 35px;
  height: 35px;

  img {
    width: 170%;
    height: 130%;
  }
`;

const LogoText = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-left: 6px;
  color: #035b96;
  font-weight: 620;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={logo} alt="logo" />
      </LogoImg>
      <LogoText>Wipi Care</LogoText>
    </LogoWrapper>
  );
}
