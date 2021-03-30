import React from "react";
import styled from "styled-components";
import Plan from "./Plan";
import { plans } from "../utils/constants";

const PricingPlans = () => {
  return (
    <Wrapper>
      <div>
        {plans.map(plan => {
          const { id, style } = plan;
          return <Plan key={id} {...plan}></Plan>;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 100px;
`;

export default PricingPlans;
