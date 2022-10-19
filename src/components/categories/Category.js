import React, { useState, useEffect, useRef } from "react";
import "./category.css";

export default function Category() {
  const dotline =
    "https://award-test.arachnomesh.com/static/media/Ellipse.db41705c5a6b27e13803.png";

  const brandlogo1 =
    "https://award-test.arachnomesh.com/static/media/seal1.9aecb1fbb57101d49b9c.webp";
  const brandlogo2 =
    "https://award-test.arachnomesh.com/static/media/seal2.4976d6bf2277c17bfef9.webp";
  const brandlogo3 =
    "https://award-test.arachnomesh.com/static/media/seal3.91161879cd7ae37134b8.webp";
  const images = [
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/1.a4b910dcc28a91b40e2a.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/2.de3f5b3c9d1a3815b3e4.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/3.1a89cea3195625c50f59.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/4.2ad3cba5532925820810.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/5.badb47a6c66162ee684f.webp",
    },

    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/1.f9f65e52adde539c04d5.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/2.aeeeba951b195d1bf93e.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/3.64117fd99eb44d1e420d.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/4.c0966e40ced63c710d06.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/5.b38442fe350e36507344.webp",
    },

    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/1.9375e34b7ae2e31f3527.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/2.dfd814498756a4d45c36.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/3.ad66b35ace129f367c94.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/4.44550689939f2fd859c3.webp",
    },
    {
      image_url:
        "https://award-test.arachnomesh.com/static/media/5.4698669482a7c78e4658.webp",
    },
  ];

  const totalProds = images.length;
  const tiltConstant = 360 / totalProds;
  const [category, setCategory] = useState(0);
  //   const handleCategory = () => {
  //   if (category === 2) {
  //   setCategory(0);
  //} else if (category < 2) {
  // setCategory(category + 1);
  // }
  // };
  const catRef = useRef(0);
  const handleRef = () => {
    if (catRef.current === 2) {
      catRef.current = 0;
    } else {
      catRef.current += 1;
    }
    setCategory(catRef.current);
  };
  useEffect(() => {
    setInterval(() => {
      handleRef();
    }, 5000);
  }, []);

  return (
    <div className="prodivi bg-brown" id="category">
      <div className="main">
        <div>
          <h2 style={{ color: "white" }}>AWARDS CATEGORIES</h2>
        </div>
        <div className="categories">
          <h3 className={category === 0 ? "viewHeading" : "hideHeading"}>
            Brand of the year
          </h3>
          <h3 className={category === 1 ? "viewHeading" : "hideHeading"}>
            Product of the year
          </h3>
          <h3 className={category === 2 ? "viewHeading" : "hideHeading"}>
            Product launch of the year
          </h3>
          {category === 0 && (
            <p className="showdetails">
              The Brand of the Year is a distinctive and premier recognition for
              a brand recognized as a champion in its industry category based on
              current year market standing and consumer preference.
            </p>
          )}
          {category === 1 && (
            <p className="showdetails">
              The Product of the Year Award celebrates the best products in the
              market in different categories of FMCG products and rewards
              manufacturers for quality, strategy, marketing and other
              parameters.
            </p>
          )}
          {category === 2 && (
            <p className="showdetails">
              The Product Launch of the Year Award celebrates the efforts of
              FMCG companies who continuously develop new products, brand
              extensions and packaging updates to meet the new industry
              standards and demands of the consumers.
            </p>
          )}
          <div className="clippedCircle">
            <img
              alt="rorate"
              src={dotline}
              className={
                "ellipseDashed " +
                (category === 0 ? "rotate30" : category === 1 ? "rotate60" : "")
              }
            />
            <div className={"displayproduct "}>
              {images.map((item, index) => {
                return (
                  <div>
                    <img
                      alt="product"
                      src={item.image_url}
                      className={
                        "productImage " +
                        (category === 1
                          ? "rotate60"
                          : category === 2
                          ? "rotate120"
                          : "rotate0")
                      }
                      style={{ "--tilt": `${tiltConstant * index + 1}deg` }}
                    />
                  </div>
                );
              })}
              <img
                alt="logo"
                src={brandlogo3}
                className={
                  "brandLogo " + (category === 0 ? "comeUp" : "goDown")
                }
              />
              <img
                alt="logo"
                src={brandlogo1}
                className={
                  "brandLogo " + (category === 1 ? "comeUp" : "goDown")
                }
              />
              <img
                alt="logo"
                src={brandlogo2}
                className={
                  "brandLogo " + (category === 2 ? "comeUp" : "goDown")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
