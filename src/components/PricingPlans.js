import React from "react";
import styled from "styled-components";
import Plan from "./Plan";

const PricingPlans = () => {
  return (
    <Wrapper>
      <Plan></Plan>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
`;

export default PricingPlans;
