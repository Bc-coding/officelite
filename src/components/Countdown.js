import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../index.css";

import { getRemainingTime, dueDate } from "../utils/futureDate";

const Countdown = () => {
  const [date, month, year] = dueDate;
  const [value, setValue] = useState(getRemainingTime());

  useEffect(() => {
    setInterval(() => {
      setValue(getRemainingTime(), 1000);
    });
  }, []);

  return (
    <Wrapper>
      <p className="dueDate">
        Coming <span>{date}</span> <span>{month}</span> <span>{year}</span>
      </p>
      <div className="deadline-container">
        <div className="deadline-format">
          <div className="deadline-format-center">
            <p className="days">{value.days}</p>
            <span>days</span>
          </div>
        </div>
        <div className="deadline-format">
          <div className="deadline-format-center">
            <p className="hours">{value.hours}</p>
            <span>hours</span>
          </div>
        </div>
        <div className="deadline-format">
          <div className="deadline-format-center">
            <p className="mins">{value.minutes}</p>
            <span>min</span>
          </div>
        </div>
        <div className="deadline-format">
          <div className="deadline-format-center">
            <p className="secs">{value.seconds}</p>
            <span>sec</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  text-align: center;
  padding: 0;

  .dueDate {
    text-transform: uppercase;
    font-size: 16px;
    line-height: 48px;
    font-weight: 700;
    color: white;
    letter-spacing: 5px;
    span {
      color: var(--clr-darkblue);
    }
  }

  .deadline-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.5rem;
    margin: 0 auto;

    .deadline-format {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333950;
      border-radius: 4px;

      width: 72px;
      height: 92px;
    }

    .deadline-format-center {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .days,
    .hours,
    .mins,
    .secs {
      text-align: center;
      font-size: 32px;
      line-height: 48px;
      color: #fff;

      margin: 0;
    }

    span {
      font-size: 12px;
      line-height: 28px;
      font-weight: 700;
      opacity: 0.5;
      text-align: center;

      margin: 0;
    }
  }
`;

export default Countdown;
