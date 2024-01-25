import { useState, useEffect } from "react";
import styles from "./Clock.module.css";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Pinterest from "../images/icon-pinterest.svg";

const Clock = () => {
  const newCountdownTime = new Date();
  newCountdownTime.setHours(newCountdownTime.getHours() + 15);

  const [targetTime, setTargetTime] = useState(newCountdownTime);
  const [currentTime, setCurrentTime] = useState(new Date());

  const updatedClock = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updatedClock, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const remainingTime = targetTime - currentTime;
  const remainingHours = Math.floor(remainingTime / 3600000);
  const remainingMinutes = Math.floor((remainingTime % 3600000) / 60000);
  const remainingSeconds = Math.floor((remainingTime % 60000) / 1000);

  return (
    <>
      <div className={styles.furtherBg}></div>
      <div className={styles.centerContainer}>
        <h1>Coming Soon...</h1>
        <div className={styles.mainClock}>
          <div className={styles.flipCardTimer}>
            <div className={styles.card}></div>
            <div className={styles.leftDot}></div>
            <div className={styles.rightDot}></div>
            <div className={styles.flipCardTimerText}>{remainingHours}</div>
            <div className={styles.timeText}>hours</div>
          </div>
          <div className={styles.flipCardTimer}>
            <div className={styles.card}></div>
            <div className={styles.leftDot}></div>
            <div className={styles.rightDot}></div>
            <div className={styles.flipCardTimerText}>{remainingMinutes}</div>
            <div className={styles.timeText}>minutes</div>
          </div>
          <div className={styles.flipCardTimer}>
            <div className={styles.card}></div>
            <div className={styles.leftDot}></div>
            <div className={styles.rightDot}></div>
            <div className={styles.flipCardTimerText}>{remainingSeconds}</div>
            <div className={styles.timeText}>seconds</div>
          </div>
        </div>
        <div className={styles.social}>
          <img src={Facebook} alt="Facebook"></img>
          <img src={Instagram} alt="Instagram"></img>
          <img src={Pinterest} alt="Pinterest"></img>
        </div>
      </div>
    </>
  );
};

export default Clock;
