import React from "react";
import logo from "../assets/shared/logo.svg";
import charts from "../assets/home/illustration-charts.svg";
import headerPattern from "../assets/home/bg-pattern-header.svg";

import styled from "styled-components";
import "../index.css";
const Hero = () => {
  return (
    <Wrapper>
      <div className="headerPattern">
        <img src={headerPattern} alt="headerPattern" />
      </div>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="hero-container">
        <div className="charts-container">
          <img src={charts} alt="charts" />
        </div>
        <article className="hero-content">
          <h1>A simple solution to complex tasks is coming soon</h1>
          <p>
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </p>
          <button href="#" className="btn button1">
            Get Started
          </button>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;

  .headerPattern {
    position: absolute;
    left: -65px;
    top: -220px;

    z-index: 1;
    width: 458px;
    height: 458px;

    img {
      width: 100%;
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

  .charts-container {
    width: 171px;
    height: 192px;
    margin: 0 auto;
    margin-top: calc(156px - 46px);
    z-index: 2;

    img {
      width: 100%;
      padding: 0 0;
    }
  }

  .hero-content {
    text-align: center;
    h1 {
      font-size: 40px;
      line-height: 48px;
      color: #333950;

      margin-top: 64px;
    }

    p {
      font-weight: 400;
      color: #747b95;
      font-size: 16px;
      line-height: 26px;

      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
`;

export default Hero;
