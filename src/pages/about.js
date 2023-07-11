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
          <h1 className="hero__title">About</h1>
          <p className="hero__subtitle">This is the about page.</p>
        </div>
      </header>
      <main>
        <p>Hello</p>
        {/* Include additional content here */}
      </main>
    </Layout>
  );
}

export default About;