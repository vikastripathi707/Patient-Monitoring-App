import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image:  ChooseMeals,
      title: "Sign Up & Connect",
      text: "Sign up by providing your information and connect your monitoring devices to the app." },
    {
      image:  DeliveryMeals,
      title: "Visualize Health Data",
      text: "The app collects real-time health data from your connected devices and visualizes it through easy-to-understand charts and graphs. Set alerts to receive notifications if any readings are outside the normal range. ",
    },
    {
      image: PickMeals,
      title: "Control The Diet",
      text: " Interact securely with healthcare providers, set reminders for medications and health goals, and share access with family or caregivers to monitor your health.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          This is a three step process -: 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
