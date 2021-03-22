//Libraries
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
//Components
import Wave from './Wave';
import TextInput from './TextInput';
import Modal from './Modal';
//Icons
import link from '../assets/link.png';
//Styles
import { Main, Description, Image, Hide } from '../style/styles';
//Animations
import { motion } from 'framer-motion';
import { titleAnim, fade, imgAnim } from '../style/animation';

//Top section of page where URLs can be shortened
const MainSection = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fullURL, setFullURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [isValid, setIsValid] = useState(true);

  /** Validation and Backend Authentication */
  const handleClose = () => {
    setOpen(false);
  };

  const onClick = async (e) => {
    e.preventDefault();
    // Setting our configuration for a request
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Declaring our body to send to the backend
    const url = {
      fullURL: fullURL.trim(),
    };
    try {
      const res = await axios.post('http://localhost:5000/', url, config);
      setShortURL(res.data.shortURL);
      setCopied(false);
      setOpen(true);
    } catch (err) {
      setIsValid(false);
      console.log(err.response);
    }
  };
  return (
    <Main>
      <Modal
        open={open}
        onClose={handleClose}
        shortURL={shortURL}
        copied={copied}
        setCopied={setCopied}
      />
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Shorten any URL</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              in <span>one</span> click
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Our tool allows you to seamlessly turn long, unmanageable URLs into
          easy-to-use, shorter ones. Use it for free below!
        </motion.p>
        <motion.div variants={fade}>
          <Hide>
            <TextInput
              setFullURL={setFullURL}
              isValid={isValid}
              setIsValid={setIsValid}
            />
          </Hide>
        </motion.div>
        <motion.button variants={fade} onClick={onClick}>
          Shorten
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={imgAnim} src={link} alt="Link" />
      </Image>
      <Wave />
    </Main>
  );
};

export default MainSection;
