//Libraries
import React from 'react';
//Page Components
import MainSection from '../components/MainSection';
import Features from '../components/FeaturesSection';
import FaqSection from '../components/FaqSection';
import ScrollTop from '../util/ScrollTop';
//Animations
import { motion } from 'framer-motion';
import { fade } from '../style/animation';

const Content = () => {
  return (
    <motion.div exit="exit" variants={fade} initial="hidden" animate="show">
      <ScrollTop />
      <MainSection />
      <Features />
      <FaqSection />
    </motion.div>
  );
};

export default Content;
