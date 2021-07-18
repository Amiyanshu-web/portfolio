//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import React, { useState, useEffect } from "react";
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import data from "./data.json";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  const [rdata, setrData] = useState({});
  const componentDidMount = () => {
    fetchData(data);
  };

  const fetchData = (data) => {
    return fetch(data)
      .then((response) => response.json())
      .then((data) => setrData(data));
  };

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setResumeData(data);
  //     });
  // }, []);
  return (
    <Container>
      <HeroSection />
      <About />
      <Services />
      <Testimonials data={data.resume} />
      <Contact />
    </Container>
  );
};

export default Home;
