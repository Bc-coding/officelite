import React from "react";
import styled from "styled-components";

const Plan = () => {
  return (
    <Wrapper>
      <p className="name">Name</p>
      <p className="price">Free</p>
      <p className="type">Up to 5 users for free</p>
      <p className="info">info</p>
      <p className="storage">storage</p>
      <p className="desc">desc</p>
      <a href="#" className="btn">
        Try for Free
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 327px;
  height: 508px;
  text-align: center;

  margin: 0 auto;

  border: 1px solid blue;

  .name {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    margin-top: 40px;
    color: #333950;
  }

  .price {
    font-size: 56px;
    font-weight: 700;
    line-height: 64px;
    margin-top: 40px;
    margin-bottom: 8px;
    color: #333950;
  }

  .type {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    margin-top: 40px;
    color: #333950;
  }
`;

export default Plan;
