import React, { useEffect, useState } from "react";
import HomeBannerStyle from "./HomeBanner.style";
import ScrollAnimate from "../../../Core/ScrollAnimate";

const SALE_END_TIME = new Date("2026-01-31T23:59:59").getTime();
// 👆 change date/time as needed

const HomeBanner = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = SALE_END_TIME - now;

    if (diff <= 0) {
      return { d: 0, h: 0, m: 0, s: 0 };
    }

    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / (1000 * 60)) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <HomeBannerStyle className="home-banner">
      <div className="banner-texture">
        <div className="overlay">
          <div className="container">
            <ScrollAnimate delay={200}>
              <div className="banner-content">

                <h1>Dr. Pepe — The Smartest Memecoin in the World</h1>
                <p>The markets are chaos. Might as well be smart and funny.</p>

                <div className="banner-progress">
                  <div className="progress-item">
                    <h6 className="left">USDT Raised: <span>$17,090,545</span></h6>
                    <h6 className="right">Target: <span>$30,000,000</span></h6>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>

                <div className="banner-timer">
                  <h5>Sale Ends in</h5>
                  <h2>
                    {String(timeLeft.d).padStart(2, "0")}<span>d</span>
                    <strong> :</strong>
                    {String(timeLeft.h).padStart(2, "0")}<span>h</span>
                    <strong> :</strong>
                    {String(timeLeft.m).padStart(2, "0")}<span>m</span>
                    <strong> :</strong>
                    {String(timeLeft.s).padStart(2, "0")}<span>s</span>
                  </h2>
                </div>

                <button className="primary-btn banner-btn hover-btn">
                  <span className="btn-text">
                    <span>Buy $DRPEPE</span>
                    <span>Buy $DRPEPE</span>
                  </span>
                </button>

              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </HomeBannerStyle>
  );
};

export default HomeBanner;
