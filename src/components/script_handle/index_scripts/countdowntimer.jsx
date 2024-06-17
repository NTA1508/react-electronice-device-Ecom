import banner from "../../../assets/image/banner.png"
import React, { useEffect, useState } from 'react';
const CountdownTimer = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    // const b_daysElement = document.getElementById("b-days");
    // const b_hoursElement = document.getElementById("b-hours");
    // const b_minutesElement = document.getElementById("b-minutes");
    // const b_secondsElement = document.getElementById("b-seconds");

    const b_endTime = new Date();
    b_endTime.setDate(b_endTime.getDate() + 7);
    b_endTime.setHours(b_endTime.getHours() + 0);
    b_endTime.setMinutes(b_endTime.getMinutes() + 0);
    b_endTime.setSeconds(b_endTime.getSeconds() + 0);

    const b_countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
      const currentTime = new Date();
      const timeRemaining = b_endTime - currentTime;

      if (timeRemaining <= 0) {
        clearInterval(b_countdownInterval);
        setDays('00');
        setHours('00');
        setMinutes('00');
        setSeconds('00');
      } else {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setDays(daysRemaining.toString().padStart(2, "0"));
        setHours(hoursRemaining.toString().padStart(2, "0"));
        setMinutes(minutesRemaining.toString().padStart(2, "0"));
        setSeconds(secondsRemaining.toString().padStart(2, "0"));
      }
    }

    return () => clearInterval(b_countdownInterval);
  }, []);

  return (
    <section className="section banner">
      <div className="banner-img">
        <img src={banner} alt="banner-img" />
      </div>
      <div className="banner-wrap">
        <h4>カテゴリー</h4>
        <h1>音楽体験を向上させる</h1>
        <div className="banner-time">
          <div className="banner-item">
            <span id="b-days">{days}</span>
            <h4>日</h4>
          </div>
          <div className="banner-item">
            <span id="b-hours">{hours}</span>
            <h4>時</h4>
          </div>
          <div className="banner-item">
            <span id="b-minutes">{minutes}</span>
            <h4>分</h4>
          </div>
          <div className="banner-item">
            <span id="b-seconds">{seconds}</span>
            <h4>秒</h4>
          </div>
        </div>
        <button className="banner-button">今すぐ購入する!</button>
      </div>
    </section>
  );
};
export default CountdownTimer;