//Libraries
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
//Images
import link from '../assets/link-icon.png';

//Text field component for URL
const TextInput = (props) => {
  const classes = useStyles();

  const onChange = (e) => {
    props.setFullURL(e.target.value);
    props.setIsValid(true);
  };

  return (
    <div>
      {props.isValid ? (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            onChange={onChange}
            className={classes.margin}
            id="input-with-icon-textfield"
            label="Paste URL"
            placeholder="e.g. https://youtu.be/PYNODfmgK1g8GE0JmdsejiDF54FejdksE"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={link} alt="link" style={{ width: '25px' }} />
                </InputAdornment>
              ),
              classes: {
                input: classes.text,
              },
            }}
          />
        </form>
      ) : (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            onChange={onChange}
            className={classes.margin}
            error
            id="standard-error-helper-text"
            label="Invalid URL"
            placeholder="e.g. https://youtu.be/PYNODfmgK1g8GE0JmdsejiDF54FejdksE"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={link} alt="link" style={{ width: '25px' }} />
                </InputAdornment>
              ),
              classes: {
                input: classes.text,
              },
            }}
          />
        </form>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '100ch',
    },
  },
  text: {
    fontSize: 20,
  },
}));

export default TextInput;
