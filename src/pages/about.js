import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';

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
      <main className={styles.containerWithSidebar}>
        <div className={styles.mainContent}>
          <h2>Introduction</h2>
          <p>In this blog, I am aiming to document and share my Raspberry Pi projects, electronics tinkering, coding adventures, and diving into the world of cloud computing. </p>
          <p>As a computer science nerd, I enjoy spending my time working on personal projects to develop my skills</p>

          <h2>Professional Experience</h2>
          <p>Initially, I specialised in academic research, with a primary focus on climate change. I completed a PhD <a href="https://ore.exeter.ac.uk/repository/handle/10871/30021" target="_blank">'Consequences of communicating climate science online'</a> and undertook postdoctoral work in Politics.</p>
          <h2>Certifications</h2>
          <div className={styles.certsContainer}>
          <div className={styles.certificate}>
              <a href="https://www.credly.com/badges/b2a71c42-6396-4dd0-8f5d-261a46be4879/public_url" target="_blank">
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20AI%20Engineer.png" alt="Microsoft Certified: Azure AI Engineer" />
                <p className={styles.certificateTitle}>Microsoft Certified: Azure AI Engineer</p>
              </a>
            </div>
            <div className={styles.certificate}>
              <a href="https://www.credly.com/badges/11a8ef41-13a7-4155-9716-14f9eebbc185/public_url" target="_blank">
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Data%20Engineer.png" alt="Microsoft Certified: Azure Data Engineer Associate" />
                <p className={styles.certificateTitle}>Microsoft Certified: Azure Data Engineer Associate</p>
              </a>
            </div>
            <div className={styles.certificate}>
              <a href="https://www.credly.com/badges/11a8ef41-13a7-4155-9716-14f9eebbc185/public_url" target="_blank">
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Data%20Engineer.png" alt="Microsoft Certified: Azure Data Engineer Associate" />
                <p className={styles.certificateTitle}>Microsoft Certified: Azure Data Engineer Associate</p>
              </a>
            </div>
            {/* Certification 3 */}
            {/* Certification 4 */}
            {/* Certification 5 */}
            {/* Certification 6 */}
            {/* Certification 7 */}
            {/* Certification 8 */}
            {/* Certification 9 */}
          </div>
        </div>
        
      </main>
    </Layout>
  );
}

export default About;