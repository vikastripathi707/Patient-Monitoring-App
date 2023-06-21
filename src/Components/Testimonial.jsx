import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
         User's Review and Their Testimonials are as follows -:
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
         Vikas Tripathi's patient monitoring app has revolutionized our healthcare practices. With real-time monitoring and seamless integration, the app enables us to provide superior care to our patients. Vikas's expertise and attention to detail shine through in the app's user-friendly interface and reliable performance. We highly recommend Vikas and his app for any healthcare facility aiming to enhance patient monitoring and improve overall outcomes.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
