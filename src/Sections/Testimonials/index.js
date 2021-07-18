import React, { lazy } from "react";
import styled from "styled-components";
import "./index.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import { Line, Circle } from "rc-progress";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = ({ data }) => {
  // const settings = {
  //   dots: true,
  //   infinite: true,

  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  // var skillmessage = data.skillmessage;
  if (data) {
    var skills = data.skills.map(function(skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}>
            {/* <b>{skills.level}</b> */}
          </span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <Section>
      <div className="row skill">
        <div className="three columns header-col">
          <Title>
            <span>Skills</span>
          </Title>
        </div>

        <div className="nine columns main-col">
          {/* <p>{skillmessage}</p> */}

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>

      {/* to include if not done */}

      {/* <Title>Skills!</Title>
      <div style={{ margin: 20, width: 600, position: "absolute", left: 0, }}>
        <h3>C++</h3>
        <Line
          percent="80"
          strokeWidth="4"
          trailWidth="4"
          strokeColor="var(--purple)"
        />
      </div> */}

      {/* <Carousal>
        <Slider {...settings}>
          <Card
            text="CodeBucks has been essential part of our business. I would definetly
        recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-1"
          />

          <Card
            text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-2"
          />

          <Card
            text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-3"
          />

          <Card
            text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-4"
          />
        </Slider>
      </Carousal> */}
    </Section>
  );
};

export default Testimonials;
