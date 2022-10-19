import React, { useEffect, useRef, useState } from "react";
import "./benefit.css";

const data = [
  {
    image_url:
      "https://award-test.arachnomesh.com/static/media/benefit_1.de1ab640eb926f5023bf.webp",
    text: "Awards trophy",
    headtext: "Pride",
  },
  {
    image_url:
      "https://award-test.arachnomesh.com/static/media/benefit_2.e6e536b1f2271ef62bbf.webp",
    text: "Certificate of excellence",
    headtext: "Promotion",
  },
  {
    image_url:
      "https://award-test.arachnomesh.com/static/media/benefit_3.44855cbc816e3eca0cc9.webp",
    text: "Digital seal",
    headtext: "Prestige",
  },
  {
    image_url:
      "https://award-test.arachnomesh.com/static/media/benefit_4.a9f19ae497d070da2588.webp",
    text: "Coffee table book",
    headtext: "Motivation",
  },
];
const blob_colors = [
  "#FFBF00",
  "#FAB900",
  "#F5B400",
  "#F0AE00",
  "#EBA900",
  "#E6A300",
  "#E19E00",
  "#DC9800",
  "#D79300",
  "#D28D00",
  "#CD8800",
  "#C88200",
  "#C37D00",
];

export default function Benefit() {
  const [animation, setAnimation] = useState(false);
  const benifit = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (event) => {
        setAnimation(event[0].isIntersecting);
      },
      { threshold: 0.12 }
    );
    observer.observe(benifit.current);
  }, []);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const getColor = () => {
    return blob_colors[Math.floor(Math.random() * blob_colors.length)];
  };
  const getSwing = () => {
    return getRndInteger(5, 12);
  };
  const getDelay = () => {
    return getRndInteger(200, 2000);
  };
  const getFall = () => {
    return getRndInteger(-26, 26);
  };

  const blobStyle = () => {
    return {
      "--fall-angle": `${getFall()}deg`,
      "--blob-width": `${getRndInteger(20, 25)}vh`,
      "--blob-color": getColor(),
      "--animation-delay": `${getDelay()}ms`,
    };
  };
  return (
    <div className="benefitmain" id="benefit">
      <div className="section_title">
        <h2>BENEFITS</h2>
      </div>
      <div className="benifitin" ref={benifit}>
        <div className={"blobContainer " + (animation ? "blobFall" : "")}>
          <div style={blobStyle()}>PR</div>
          <div style={blobStyle()}>Increase sales</div>
        </div>
        <div className={"blobContainer " + (animation ? "blobFall" : "")}>
          <div style={blobStyle()}>Exposure</div>
          <div style={blobStyle()}>Positivity</div>
          <div style={blobStyle()}>Recognition</div>
          <div style={blobStyle()}>Networking</div>
          <div style={blobStyle()}>Differentiation</div>
          <div style={blobStyle()}>Showcasing</div>
          <div style={blobStyle()}>Excellence</div>
        </div>
        <div>
          {data.map((item, index) => {
            return (
              <div
                className="swingingCard"
                style={{
                  "--blob-width": `${getRndInteger(20, 26)}vh`,
                  "--blob-color": getColor(),
                  "--swing-angle": `${getSwing()}deg`,
                  "--animation-delay": `${getDelay()}ms`,
                }}
              >
                <div className="tophead">{item.headtext}</div>
                <img
                  className="swingCardIMG"
                  src={item.image_url}
                  alt={`benifit ${index + 1}`}
                  style={{
                    animationPlayState: animation ? "running" : "paused",
                  }}
                />
                <h4>{item.text}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
