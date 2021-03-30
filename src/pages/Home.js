import React from "react";
import { Hero, PricingPlans, CountdownHome } from "../components";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <main>
        <Hero />
        <PricingPlans />
        <CountdownHome />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: linear-gradient(180deg, #f2f2f2 60%, #25293a 60%);
  padding-bottom: 100px;
  main {
    margin: 0 24px;
  }
`;

export default Home;
