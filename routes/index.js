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
// @desc Create new shortened URL. If the URL is not valid, return an error. If the URL already exists, return the already created short URL. Otherwise, generate a new short URL.
// @access Public
router.post('/', async (req, res) => {
  try {
    const fullURL = req.body.fullURL;
    if (validUrl.isUri(fullURL)) {
      let url = await URL.findOne({ fullURL: fullURL });
      if (url) {
        return res.status(200).json(url);
      } else {
        const slug = shortid.generate();
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
// @desc Access original URL. If the URL does not exist, return an error. If the URL does match one created, return the original, full URL.
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
