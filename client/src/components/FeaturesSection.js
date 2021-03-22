//Libraries
import React from 'react';
//Icons
import clock from '../assets/clock.svg';
import diaphragm from '../assets/diaphragm.svg';
import money from '../assets/money.svg';
import teamwork from '../assets/teamwork.svg';
//Images
import demo from '../assets/demo.gif';
//Styles
import { Main, Description, Image } from '../style/styles';
import styled from 'styled-components';
//Animations
import { scrollReveal } from '../style/animation';
import { useScroll } from '../util/useScroll';

//Middle section of page detailing features of URL shortener
const FeaturesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Features
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> features
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Fast</h3>
            </div>
            <p>Skip the sign ups and shorten your URL in seconds!</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Unlimited Sharing</h3>
            </div>
            <p>Our shortened URLs have no click count or sharing limit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Simple</h3>
            </div>
            <p>We value simplicity. All it takes is the click of one button.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Enjoy unlimited usage without spending a dime.</p>
          </Card>
        </Cards>
      </Description>
      <Demo>
        <img src={demo} alt="Product demo of URL shortener" />
      </Demo>
    </Features>
  );
};

const Features = styled(Main)`
  h2 {
    color: black;
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
const Demo = styled.div`
  img {
    width: 100%;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`;

export default FeaturesSection;
