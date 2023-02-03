import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';
import Layout from '../components/Layout' 

const Home = () => {

  return (
    <Layout>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>home</h1>
          </div>
          <div className="prompt-container">
              main_contents
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Home;
