//Libraries
import React from 'react';
//Components
import Toggle from './Toggle';
//Styles and Animations
import styled from 'styled-components';
import { Main } from '../style/styles';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from '../util/useScroll';
import { scrollReveal } from '../style/animation';

//Last section of page with FAQs for URL shortener
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle className="question" title="How Do I Start?">
          <div className="answer">
            <p>
              STORD URL Shortener is simple to use! Just paste in your long,
              unmanageable URL into the text field at the top of the page, and
              click "Shorten". Let us do the magic and you'll be given a new,
              shorter URL in seconds!
            </p>
          </div>
        </Toggle>
        <Toggle className="question" title="How Much Does It Cost?">
          <div className="answer">
            <p>
              STORD URL Shortener is completely free for everyone to use. While
              other sites force you to sign up for their website or begin a free
              trial, STORD URL Shortener allows you to skip those steps and
              shorten your URL right away!
            </p>
          </div>
        </Toggle>
        <Toggle
          className="question"
          title="How Many Times Can I Use This New URL?"
        >
          <div className="answer">
            <p>
              As many times as you want! We have no click count or limit to URL
              sharing. Feel free to use this URL as often as you'd like, for as
              long as you want!
            </p>
          </div>
        </Toggle>
        <Toggle className="question" title="How Can I Contact You?">
          <div className="answer">
            <p>
              If you have any questions about the product or would like to offer
              any feedback suggestions, don't hesitate to call us at (585)
              953-0520.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(Main)`
  display: block;
  span {
    padding-top: 1rem;
    display: block;
  }
  h2 {
    color: black;
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`;

export default FaqSection;
