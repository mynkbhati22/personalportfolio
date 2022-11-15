import React, { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import mainImage from "../assets/img/header-img.svg";
import Zoom from "react-reveal/Zoom";

export default function Main() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row headerone">
          <div className="col-lg-6 col-md-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h3 className="protfolioheading">Welcome to my Portfolio</h3>
                  <h1 className="loopanimation">
                    {`Hi! I'm Mayank Bhati`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="mainheader-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <a
                    href="#contact-us"
                    onClick={() => console.log("connect")}
                    className="connect-button"
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div className="col-lg-6 col-md-12">
            <TrackVisibility>
              <div className="image">
                <img src={mainImage} alt="" className="vert-move" />
              </div>
            </TrackVisibility>
          </div>
        </div>
      </div>
    </div>
  );
}
