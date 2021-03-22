//Libraries
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RedirectPage = () => {
  const { slug } = useParams();

  async function getPage() {
    try {
      const res = await axios.get('http://localhost:5000/' + slug);
      const fullURL = res.data;
      window.location.href = fullURL;
    } catch (err) {
      console.log(err.response);
    }
  }

  useEffect(() => {
    getPage();
  });
  return <div></div>;
};

export default RedirectPage;
