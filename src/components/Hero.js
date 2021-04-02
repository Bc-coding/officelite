import React from "react";
import charts from "../assets/home/illustration-charts.svg";
import styled from "styled-components";
import "../index.css";
import Logo from "./Logo";

const Hero = () => {
  return (
    <Wrapper>
      <Logo />
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
  @media screen and (min-width: 768px) {
    padding: 0 40px;
    margin: 0 auto;
    .hero-container {
      display: grid;
      grid-template-columns: 50% 40%;
      grid-gap: 10%;
    }
    .charts-container {
      order: 2;
      width: 281px;
      height: 314px;
    }
  }
`;

export default Hero;
