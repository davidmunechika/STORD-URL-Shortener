//Libraries
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: black;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  z-index: 2;
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 90%;
    height: 70vh;
    /* object-fit: cover; */
  }
  @media (max-width: 1300px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
