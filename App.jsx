import React, { useState, useEffect } from "react";
import ReactAudioPlayer from 'react-audio-player';
import Timer from "./timer";
import "./App.css"

export default function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(99)
  const [isRunning, setIsRunning] = useState(null);
  // End of Time

  const [showEndScreen, setShowEndScreen] = useState({
    show: false,
  });
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    }
    if (hours === 0 && minutes === 0 && seconds === 0) {
      setShowEndScreen({ ...showEndScreen, show: true });
      resetTimer();
    }
    return () => clearInterval(interval);
  }, [seconds, minutes, hours, isRunning, showEndScreen.show]);

  // Start Pause & Stop functions

  // Start
  function startTimer() {
    if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      setIsRunning(true);
      setShowEndScreen({ ...showEndScreen, show: false });
    } else {
      window.alert("Add Time.");
    }
  }

  // Pause
  function pauseTimer() {
    setIsRunning(false);
  }
  // Stop

  function stopTimer() {
    resetTimer();
    setShowEndScreen({ ...showEndScreen, show: false });
  }

  function resetTimer() {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }
  
  const changeMinutes = (e) => {
    setMinutes(e.target.value);
  };
  const changeHours = (e) => {
    setHours(e.target.value);
  };
  return (
    <div>
      <div className="header" style={{backgroundImage: "url(" + "src\focus.jpg" + ")"}}></div>
      {showEndScreen.show && (
        <h1 className="title  text-light">{showEndScreen.message}</h1>
      )}
      <Timer
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        changeMinutes={changeMinutes}
        changeHours={changeHours}
      />
      <br />
      <div  className="icons">
        {!isRunning && (
          <box-icon name='play' size = '70px' className="btn btn-accept btn-lg" onClick={startTimer}></box-icon>
        )}
        {isRunning && (
          <box-icon name='pause' size = '70px' className="btn btn-accept btn-lg" onClick={pauseTimer}></box-icon>
        )}{" "}
        <box-icon name='reset' size = '50px' className="btn btn-accept btn-lg" onClick={stopTimer}></box-icon>
      </div>
      <br></br>
      <div className="audio">
        <ReactAudioPlayer
          src="src/sound.ogg"
          autoPlay
          controls
        />
      </div>
    </div>
  );
}