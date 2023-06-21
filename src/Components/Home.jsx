/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { RiHeartPulseFill } from "react-icons/ri";
import Link from "react-router-dom";
import axios from "axios";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import BG from "../Assets/bg.png";
// import BsFillHeartPulseFill from "react-icons/bs";
const Home = () => {
  const [data, setData] = useState(null);
  const [dataFeeds, setDataFeeds] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.thingspeak.com/channels/2081676/feeds.json?api_key=UXKY1PYMMX3LX2UK&results=1"
        );
        setData(response.data.channel);
        // console.log(response.data.feeds[0]);
        setDataFeeds(response.data.feeds[0]);
        // console.log(dataFeeds);
        // setDataFeeds(response.data.feeds);
        // console.log(response.data.feeds[0]);
        // console.log(dataFeeds);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    const interval = setInterval(() => {
      fetchData();
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="btn " style={{ color: "#fd9c17" }}>
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="home-container">
        <Navbar />

        <div className="home-banner-container banner-one">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <div
              className=" homesub-title elementor-element elementor-element-3714bde elementor-widget__width-auto elementor-widget elementor-widget-heading animated fadeInUp"
              data-id="3714bde"
              data-element_type="widget"
              data-settings='{"_animation":"fadeInUp"}'
              data-widget_type="heading.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-heading-title elementor-size-default">
                  Vikas Tripathi
                </div>{" "}
              </div>
            </div>
            <h1 className="primary-heading">{data.name}</h1>
            <p className="primary-text"> Discover the power of personalized health management with our Web-app. Developed by Vikas Tripathi, this user-friendly platform allows you to effortlessly track and monitor your health.</p>
            <div className="about-buttons-container">
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/file/d/1Vs1_A4YyMhRxaarSCiRLH1sBn8YyKmGf/view?usp=sharing"
                className="secondary-button"
              >
                Learn More
              </a>
              <button className="watch-video-button ">
                <BsFillPlayCircleFill />
              </button>
            </div>
          </div>
          <div className="home-image-section">
            {/* <img src={BannerImage} alt="" />*/}
            <img
              src="http://18.233.162.176/static/media/pic1.2e6e3d86788bda39e5cf.png"
              alt=""
            />
            {/*<img
            src="https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/img1.png"
            alt=""
         />*/}
          </div>
        </div>
      </div>
      <div className="bgimage">
        <div className="contact-page-wrapper">
          <h1 className="primary-heading"> Patient Live Data</h1>

          {/* <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
  </div>*/}

          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="contact-form-container  "
              style={{ marginRight: "1rem" }}
            >
              <div
                className="row "
                style={{
                  width: "15rem",
                }}
              >
                <div
                  className="col-6"
                  style={{
                    display: "flex ",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h3>{data.field2}</h3>
                  <div style={{ fontSize: "1.5rem" }}>{dataFeeds.field1}</div>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <div
                className="row"
                style={{
                  width: "15rem",
                }}
              >
                <div
                  className="col-6"
                  style={{
                    display: "flex ",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h3>{data.field1}</h3>
                  <div
                    style={{
                      display: "flex ",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    {dataFeeds.field2}{" "}
                    <RiHeartPulseFill
                      className="heart-icon"
                      style={{ fontSize: "3rem", marginLeft: "1rem" }}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
