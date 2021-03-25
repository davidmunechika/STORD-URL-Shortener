//Config
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Libraries
const express = require('express');
const shortid = require('shortid');
const validUrl = require('valid-url');
//Models
const URL = require('../models/url');

const router = express.Router();

// @route POST /
// @desc Create new shortened URL
// @access Public
router.post('/', async (req, res) => {
  try {
    const fullURL = req.body.fullURL;
    const slug = shortid.generate();
    if (validUrl.isUri(fullURL)) {
      let url = await URL.findOne({ fullURL: fullURL });
      if (url) {
        return res.status(200).json(url);
      } else {
        const shortURL = process.env.BASE_URL + '/' + slug;
        url = new URL({
          fullURL,
          shortURL,
          slug,
        });
        await url.save();
        return res.status(201).json(url);
      }
    } else {
      return res
        .status(400)
        .json('Invalid URL entered. Only valid URLs can be shortened.');
    }
  } catch (err) {
    return res.status(500).json('Internal server error');
  }
});

// @route GET /:slug
// @desc Access original URL
// @access Public
router.get('/:slug', async (req, res) => {
  try {
    var slug = req.params.slug;
    var url = await URL.findOne({ slug: slug });
    if (url) {
      return res.status(200).json(url.fullURL);
    } else {
      return res.status(400).json('No URL exists for the given short URL');
    }
  } catch (err) {
    return res.status(500).json('Internal server error');
  }
});

module.exports = router;
