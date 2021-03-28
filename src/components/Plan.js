import React from "react";
import styled from "styled-components";
import "../index.css";

const Plan = props => {
  const { name, price, type, info1, info2, info3, style } = props;
  return (
    <Wrapper style>
      <p className="name">{name}</p>
      <p className="price">{price}</p>
      <p className="type">{type}</p>
      <p className="body2 mt">{info1}</p>
      <p className="body2 mt">{info2}</p>
      <p className="body2 mt">{info3}</p>
      <a href="#" className="btn button2">
        Try for Free
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 327px;
  height: 508px;
  text-align: center;
  background: ${props => (props.style ? "red" : "white")};
  border-radius: 13px;
  box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.25);

  margin: 0 auto;
  margin-bottom: 32px;
  padding-top: 40px;

  .name {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: var(--clr-text-dark);
  }

  .price {
    font-size: 56px;
    font-weight: 700;
    line-height: 64px;
    margin-top: 40px;
    margin-bottom: 8px;
    color: var(--clr-text-dark);
  }

  .type {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 40px;
    color: var(--clr-text-dark);
  }

  .mt {
    margin-top: 16px;
  }
`;

export default Plan;
