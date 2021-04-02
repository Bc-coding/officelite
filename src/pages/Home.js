import React from "react";
import { Hero, PricingPlans, CountdownHome } from "../components";
import styled from "styled-components";

import footerPattern from "../assets/home/bg-pattern-footer.svg";

function Home() {
  return (
    <Wrapper>
      <Hero />
      <main>
        <PricingPlans />
        <CountdownHome />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(180deg, #f2f2f2 55%, #25293a 55%);

  main {
    background-image: url(${footerPattern});
    background-size: 350%;
    background-position: 50% 125%;
    background-repeat: no-repeat;

    padding: 0 24px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 768px) {
    main {
      padding: 0 40px;
      padding-bottom: 100px;
    }
  }
`;

export default Home;
