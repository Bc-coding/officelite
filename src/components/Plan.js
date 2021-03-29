import React from "react";
import styled from "styled-components";
import "../index.css";

import pricingPattern from "../assets/home/bg-pattern-pricing.svg";

const Plan = props => {
  const { name, price, type, info1, info2, info3, style } = props;

  if (style === true) {
    return (
      <Wrapper primary>
        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <p className="type">{type}</p>
        <p className="body2 text-white mt">{info1}</p>
        <p className="body2 text-white mt">{info2}</p>
        <p className="body2 text-white mt">{info3}</p>
        <button href="#" className="btn button3 mt">
          Try for Free
        </button>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <p className="name">{name}</p>
      <p className="price">{price}</p>
      <p className="type">{type}</p>
      <p className="body2 text-white mt">{info1}</p>
      <p className="body2 text-white mt">{info2}</p>
      <p className="body2 text-white mt">{info3}</p>
      <button href="#" className="btn button2 mt">
        Try for Free
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 327px;
  height: 508px;
  text-align: center;
  background: ${props => (props.primary ? "#5175ff" : "white")};
  /* background-image: url(${pricingPattern}); */
  background-image: url(${props => (props.primary ? pricingPattern : "")});
  background-size: 250%;
  background-position: 50% 110%;
  background-repeat: no-repeat;

  color: ${props => (props.primary ? "white" : "#747b95")};
  border-radius: 13px;
  box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.25);

  margin: 0 auto;
  margin-bottom: 32px;
  padding-top: 40px;
  padding-bottom: 40px;

  .name {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: ${props => (props.primary ? "white" : "#333950")};
  }

  .price {
    font-size: 56px;
    font-weight: 700;
    line-height: 64px;
    margin-top: 40px;
    margin-bottom: 8px;
    color: ${props => (props.primary ? "white" : "#333950")};
  }

  .type {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 40px;
    color: ${props => (props.primary ? "white" : "#747b95")};
  }

  .mt {
    margin-top: 16px;
  }

  .text-white {
    color: ${props => (props.primary ? "white" : "#747b95")};
    opacity: 0.75;
  }
`;

export default Plan;
