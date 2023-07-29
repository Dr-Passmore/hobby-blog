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
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20AI%20Engineer.png" alt="Microsoft Certified: Azure AI Engineer Badge" />
                <p className={styles.certificateTitle}>Microsoft Certified: Azure AI Engineer</p>
              </a>
            </div>
            <div className={styles.certificate}>
              <a href="https://www.credly.com/badges/11a8ef41-13a7-4155-9716-14f9eebbc185/public_url" target="_blank">
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Data%20Engineer.png" alt="Microsoft Certified: Azure Data Engineer Associate Badge" />
                <p className={styles.certificateTitle}>Microsoft Certified: Azure Data Engineer Associate</p>
              </a>
            </div>
            <div className={styles.certificate}>
              <a href="https://www.credly.com/badges/c0796af2-b670-4357-b88b-77bfc0c8f133/public_url" target="_blank">
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Data%20Scientist.png" alt="Microsoft Certified: Azure Data Scientist Associate Badge" />
                <p className={styles.certificateTitle}>Microsoft Certified: Azure Data Scientist Associate</p>
              </a>
            </div>
            <div className={styles.certificate}>
              <a href="https://www.credly.com/badges/1e14d2f0-c762-44cf-81c4-f0bea8e7183c/public_url" target="_blank">
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Power%20BI.png" alt="Microsoft Certified: Power BI Data Analyst Associate Badge" />
                <p className={styles.certificateTitle}>Microsoft Certified: Power BI Data Analyst Associate</p>
              </a>
            </div>
            <div className={styles.certificate}>
              <a href="https://www.credly.com/badges/d584a8bf-508d-46c6-be47-9bb1f6d782f9/public_url" target="_blank">
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Azure%20Solutions%20Architect.png" alt="Microsoft Certified: Azure Solutions Architect Expert Badge" />
                <p className={styles.certificateTitle}>Microsoft Certified: Azure Solutions Architect Expert</p>
              </a>
            </div>
            <div className={styles.certificate}>
              <a href="https://www.credly.com/badges/92086066-f3bd-4e3c-aae7-83d289e7e49f/public_url" target="_blank">
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Azure%20Admin.png" alt="Microsoft Certified: Azure Administrator Associate Badge" />
                <p className={styles.certificateTitle}>Microsoft Certified: Azure Administrator Associate</p>
              </a>
            </div>
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