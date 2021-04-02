import React from "react";
import "../index.css";
import styled from "styled-components";
import headerPattern from "../assets/home/bg-pattern-header.svg";
import logo from "../assets/shared/logo.svg";

const Logo = () => {
  return (
    <Wrapper>
      <div className="headerPattern">
        <img src={headerPattern} alt="headerPattern" />
      </div>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .headerPattern {
    position: absolute;
    right: -150px;
    top: -220px;

    z-index: 1;
    width: 458px;
    height: 458px;

    img {
      width: 115%;
    }
  }

  .logo-container {
    width: 155px;
    height: 30px;
    z-index: 2;

    margin: 0 auto;
    margin-top: 46px;

    img {
      width: 100%;
    }
  }
  @media screen and (min-width: 768px) {
    .logo-container {
      margin: 0 0;
      margin-top: 72px;
    }
  }
`;

export default Logo;
