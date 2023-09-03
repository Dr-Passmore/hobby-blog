import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';

function About() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`About ${siteConfig.title}`}
      description="Description of the About page">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Dr Phillip Passmore</h1>
          <p className="hero__subtitle">Hello and welcome to my website!</p>
        </div>
      </header>
      <main className={styles.containerWithSidebar}>
        <div className={styles.mainContent}>
          <h2>About me</h2>
          <p>Welcome to my website, where I document and share my journey through Raspberry Pi projects, electronics tinkering, coding adventures, and cloud computing projects. I'm passionate about honing my skills through personal projects and drawing from a diverse range of IT roles that have shaped my broad experience. As my journey evolved, I delved into diverse professional experiences that enriched my skills and knowledge.</p>

          <p>I enjoy spending my time working on personal projects that not only fuel my curiosity but also hone my skills. I have been fortunate to have been able to undertake a range of IT roles which has given me broad IT experience. However, I initially started down a different path</p>

          <h2>Professional Experience</h2>
          
          <h3>Climate Change Research</h3>
          <div className={styles.academiaContainer}>
            <div className={styles.academiaText}>
            <p>
                My academic journey led me to specialise in Environmental Politics, eventually focusing on Climate Change communication with my PhD exploring the impact of the Internet. My research focused on <a href="https://ore.exeter.ac.uk/repository/handle/10871/30021" target="_blank">'Consequences of communicating climate science online'</a>. Taking an interdisciplinary approach, I explored public understanding of science through the lens of computer-mediated communication.
            </p>
            <p>
                Employing a mixed methods approach, I used experimental methodology to analyse the impact of different media content on participants' comprehension of Climate Change. Additionally, I engaged participants in focus groups to gather in-depth insights into their perspectives on using the internet to engage with information about climate science. The journey of pursuing my doctoral degree was immensely fulfilling and enriching.
            </p>
            <p>
                Following the completion of my PhD, I continued my research journey with the Politics department, contributing to projects centred around environmental activism, the political landscape including the rise of Corbyn, and intriguing questions such as <a href="https://journals.sagepub.com/doi/abs/10.1177/2399654419825654" target="_blank">'Why did Cornwall vote for Brexit?'</a>.
            </p>
            <p>
              
            </p>
            </div>
            <div className={styles.academiaImage}>
              <img src="https://personalblogimages.blob.core.windows.net/websiteimages/PhD%20Research%20poster-1.png" alt="PhD Research Poster" />
            </div>
          </div>

          <h3>IT Experience</h3>

          <p>Prior to my career in IT, I was always interested and engaging with tech projects. I picked up a Raspberry Pi during my PhD to use for Network Allocated Storage, piHole, and a Calibre library for my eBooks.</p>

          <p>I have undertaken a range of IT <a href="https://www.linkedin.com/in/phillippassmore/" target="_blank">experience</a>. This includes work as an End User Experience Engineer at Royal Cornwall NHS Hospitals Trust[RCHT], nothing to do with User Interface[UI] design, but instead was a mix of configuation management (mobile devices and SCCM engineer) and cyber Security Analyst. While this was a job with a low quality job title, it did result in a job interview experience where they added a member to the panel with UI design experience to ask questions on my UI design experience. Still it was overall a very positive experience, and was my first role which I worked with PowerShell regularly</p>

          <p>After 2 years I left the End User Experience Team to become an automation specialist in the Data Warehouse at RCHT. An interesting aspect to this job was the plan to migrate the Data Warehouse to Azure. Fortunately we had free access to Azure training and Azure Microsoft Certs to enable to team to upskill. I took this opportunity to complete a wide range of Azure skills including the majority of the data certs, solution design, and Security Engineer cert. Eventually, the migration to Azure was put on long term hold, but not before I had gained a large amount of Azure knowledge</p>

          

          <h3>Azure Certifications</h3>

          <p> I currently hold 17 Microsoft Azure certs including all 8 of the fundamental certs and the following certs:</p>
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
            <div className={styles.certificate}>
              <a href="https://www.credly.com/badges/fcce36b4-0406-4162-a3ee-084373d07ffc/public_url" target="_blank">
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Azure%20Security%20Engineer.png" alt="Microsoft Certified: Azure Security Engineer Associate Badge" />
                <p className={styles.certificateTitle}>Microsoft Certified: Azure Security Engineer Associate</p>
              </a>
            </div>
            <div className={styles.certificate}>
              <a href="https://www.credly.com/badges/9a8c2170-7d0a-474e-8dc1-aa3f516325ba/public_url" target="_blank">
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Identity%20and%20Access.png" alt="Microsoft Certified: Identity and Access Administrator Associate Badge" />
                <p className={styles.certificateTitle}>Microsoft Certified: Identity and Access Administrator Associate</p>
              </a>
            </div>
            <div className={styles.certificate}>
              <a href="https://www.credly.com/badges/4b6d71c7-3ede-4388-bcb8-64b75d11aa3b/public_url" target="_blank">
                <img src="https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20IOT%20Dev.png" alt="Microsoft Certified: Azure IoT Developer Specialty Badge" />
                <p className={styles.certificateTitle}>Microsoft Certified: Azure IoT Developer Specialty</p>
              </a>
            </div>
          </div>
        </div>
        
      </main>
    </Layout>
  );
}

export default About;