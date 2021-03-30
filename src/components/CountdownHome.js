import React from "react";
import styled from "styled-components";
import "../index.css";

import Countdown from "./Countdown";

const CountdownHome = () => {
  return (
    <Wrapper>
      <Countdown />
      <button href="#" className="btn button1">
        Get Started
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 328px;
  height: 255px;
  text-align: center;

  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid pink;

  .button1 {
    box-shadow: none;
    margin-top: 40px;
  }
`;

export default CountdownHome;
