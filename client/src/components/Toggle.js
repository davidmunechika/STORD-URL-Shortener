//Libraries
import React, { useState } from 'react';
//Animations
import { motion } from 'framer-motion';

//Component for toggling FAQ elements
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
