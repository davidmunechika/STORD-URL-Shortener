//Libraries
import { Dialog, DialogContent } from '@material-ui/core';
//Styles
import styled from 'styled-components';
//Icons
import copy from '../assets/copy.svg';

//Popup modal for generated short URL
const Modal = (props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.shortURL);
    props.setCopied(true);
  };
  return (
    <Dialog id="successDialog" open={props.open} onClose={props.onClose}>
      <ModalContent>
        <h1>Thank you for using STORD URL Shortener!</h1>
        <DialogContent dividers={true}>
          <p>Here's your shortened URL:</p>
          <h2 id="shortURL">{props.shortURL}</h2>
          <img
            id="copyIcon"
            src={copy}
            alt="copy icon"
            onClick={() => handleCopy()}
          />
          {!props.copied ? (
            <p id="placeholderText">Copy the link above</p>
          ) : (
            <p id="copiedText">Copied!</p>
          )}
          <p id="actionText">
            Have another URL to convert? Click anywhere outside this box to
            start over!
          </p>
        </DialogContent>
      </ModalContent>
    </Dialog>
  );
};

const ModalContent = styled.div`
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h1 {
    color: black;
    font-weight: lighter;
    padding: 2rem;
  }
  h2 {
    font-size: 2rem;
    padding: 2rem;
    display: inline-block;
    color: #4366fb;
  }
  p {
    padding: 0rem;
  }
  img {
    width: 2rem;
    :hover {
      opacity: 0.5;
    }
  }
  #actionText {
    font-size: 1rem;
    padding: 0;
  }
  #placeholderText {
    margin-bottom: 1rem;
    color: goldenrod;
  }
  #copiedText {
    margin-bottom: 1rem;
    color: #52c730;
  }
`;

export default Modal;
