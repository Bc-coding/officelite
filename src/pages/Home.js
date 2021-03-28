import React from "react";
import { Hero, PricingPlans } from "../components";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <main>
        <Hero />
        <PricingPlans />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 24px;
`;

export default Home;
