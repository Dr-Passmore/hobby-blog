import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function About() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`About ${siteConfig.title}`}
      description="Description of the About page">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Dr Phillip Passmore</h1>
          <p className="hero__subtitle">Hello and welcome to my website!</p>
        </div>
      </header>
      <main>
        <h2>Introduction</h2>
        <p>In this blog, I am aiming to document and share my Raspberry Pi projects, electronics tinkering, coding adventures, and diving into the world of cloud computing. </p>
        <p>As a computer science nerd, I enjoy spending my time working on personal projects to develop my skills</p>

        <h2>Professional Experience</h2>
        <p>Initially, I specialised in academic research, with a primary focus on climate change. I completed a PhD <a href="https://ore.exeter.ac.uk/repository/handle/10871/30021" target="_blank">'Consequences of communicating climate science online'</a> and undertook postdoctoral work in Politics.</p>
        {/* Include additional content here */}
      </main>
    </Layout>
  );
}

export default About;