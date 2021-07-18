import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";
import profile from "../../assets/profile-pic (6).png";
import human from "../../assets/human.svg";
import me from "../../assets/me.png";

import hand from "../../assets/hand.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;
const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
  position: absolute;
  right: 40rem;
  top: 15rem;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px #dd9043;
  border-color: #dd9043 transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
  position: absolute;
  right: 42rem;
  top: 17rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.3rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

AOS.init();
const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
      <Hand>
        <img src={hand} alt="" />
      </Hand>
      <Main>
        <div>
          <Title>Who Am I?</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            {/* <img src={rocket} alt="" width="400" height="400" /> */}
            <img src={profile} alt="" width="400" height="400" />
          </Rocket>
          <AboutText>
            {/* <Human>
              <img src={me} alt="" width="400" height="400" />
            </Human> */}
            <Text>
              Hi there! Nice to meet you. I am Amiyanshu, a 3rd Year Engineering
              Student at IIT(BHU), Varanasi. I like to code things from scratch,
              and enjoy bringing ideas to life in the browser.Apart from this I
              love creating digital artwork using Photoshop.Innovative ReactJS
              developer with willingness to learn and explore my knowledge.
            </Text>
            {/* <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div> */}
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
