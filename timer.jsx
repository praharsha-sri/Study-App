import React from "react";
import { BsStopwatch } from "react-icons/bs";
import styled from "styled-components";

const TimerWrapper = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: #222;
  color: #eee;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.4);
  padding: 1rem 0;

  .stop-watch {
    font-size: 6rem;
    margin-right: 2rem;
  }
  label {
    margin-bottom: 0.5rem;
    padding: 5px;
  }
  input {
    width: 100px;
    margin-right: 1rem;
    color: #282c34;
    outline: none;
    border: none;
    font-size: 4.5rem;
    font-weight: 600;
    text-align: center;
    padding: 0rem 0.5rem;
    border-radius: 5px;
  }
  input:hover {
    background-color: #928f8f;
  }
`;

export default function Timer({
  seconds,
  minutes,
  hours,
  changeMinutes,
  changeHours,
}) {
  return (
    <TimerWrapper>
      <BsStopwatch className="stop-watch " />
      <div className="d-flex flex-column">
        <label>HH</label>
        <input value={hours} onChange={changeHours} />
      </div>{" "}
      <div className="d-flex flex-column">
        <label>MM</label>
        <input value={minutes} onChange={changeMinutes} />
      </div>
    </TimerWrapper>
  );
}