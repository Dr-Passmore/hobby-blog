import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';

// Key certifications shown on the page. To add one: append an entry with the
// badge image uploaded to blob storage and the credential share link.
const certifications = [
  {
    title: 'Microsoft Certified: Azure AI Engineer',
    badge: 'https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20AI%20Engineer.png',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/89822904/3B1079223C054FF8?sharingId=441B641F23E43659',
  },
  {
    title: 'Microsoft Certified: Azure Data Engineer Associate',
    badge: 'https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Data%20Engineer.png',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/89822904/26F3DEA6A1DE0007?sharingId=441B641F23E43659',
  },
  {
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    badge: 'https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Data%20Scientist.png',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/89822904/8C608FC860F589F?sharingId=441B641F23E43659',
  },
  {
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    badge: 'https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Power%20BI.png',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/89822904/1B3E5F69ED309CF1?sharingId=441B641F23E43659',
  },
  {
    title: 'Microsoft Certified: Azure Solutions Architect Expert',
    badge: 'https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Azure%20Solutions%20Architect.png',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/89822904/4D9678B140919E6C?sharingId=441B641F23E43659',
  },
  {
    title: 'Microsoft Certified: Azure Administrator Associate',
    badge: 'https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Azure%20Admin.png',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/89822904/2B6449917E999664?sharingId=441B641F23E43659',
  },
  {
    title: 'Microsoft Certified: Azure Security Engineer Associate',
    badge: 'https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Azure%20Security%20Engineer.png',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/89822904/AEA96780E1F9E015?sharingId=441B641F23E43659',
  },
  {
    title: 'Microsoft Certified: Identity and Access Administrator Associate',
    badge: 'https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20Identity%20and%20Access.png',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/89822904/1E96DEBEF211EA30?sharingId=441B641F23E43659',
  },
  {
    title: 'Microsoft Certified: Azure IoT Developer Specialty',
    badge: 'https://personalblogimages.blob.core.windows.net/websiteimages/MS%20Cert%20IOT%20Dev.png',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/89822904/173A7D9665B1BF66?sharingId=441B641F23E43659',
  },
];

function About() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`About ${siteConfig.title}`}
      description="About Dr Phillip Passmore — Cloud Architect and tinkerer sharing Raspberry Pi, electronics, and Azure projects.">
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

          <p>I enjoy spending my time working on personal projects that not only fuel my curiosity but also hone my skills. I have been fortunate to have been able to undertake a range of IT roles which has given me broad IT experience. However, I initially started down a different path.</p>

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
            </div>
            <div className={styles.academiaImage}>
              <img src="https://personalblogimages.blob.core.windows.net/websiteimages/PhD%20Research%20poster-1.png" alt="PhD Research Poster" />
            </div>
          </div>

          <h3>IT Experience</h3>

          <p>Prior to my career in IT, I was always interested and engaging with tech projects. I picked up a Raspberry Pi during my PhD to use for Network Allocated Storage, piHole, and a Calibre library for my eBooks.</p>

          <p>I have undertaken a range of IT <a href="https://www.linkedin.com/in/phillippassmore/" target="_blank">experience</a>. This includes work as an End User Experience Engineer at Royal Cornwall NHS Hospitals Trust[RCHT], nothing to do with User Interface[UI] design, but instead was a mix of configuration management (mobile devices and SCCM engineer) and cyber security analyst. Unfortunately, this is an example where a confusing job title can result in employers jumping to conclusions. I did end up in a job interview where they had added a member to the panel with UI design experience to ask questions on my UI design experience. Still it was overall a very positive experience, and was my first role where I worked with PowerShell regularly. I was able to gain a wide range of IT experience in the role.</p>

          <p>After 2 years I left the End User Experience Team to become an automation specialist in the Data Warehouse at RCHT. An interesting aspect to this job was the plan to migrate the Data Warehouse to Azure. Fortunately, we had free access to Azure training and Azure Microsoft Certs to enable the team to upskill. I took this opportunity to complete a wide range of Azure skills including the majority of the data, infrastructure, and Security certs. Eventually, the migration to Azure was put on long term hold, but not before I had gained a large amount of Azure knowledge.</p>

          <p>Thanks to the opportunity to be involved in an Azure Migration and all the training I had access to, I now work as a Cloud Architect. I'm working on keeping up to date with the wide range of Azure technology and specialising into data architecture.</p>

          <h3>Azure Certifications</h3>

          <p>I have earned 19 Microsoft certifications, covering data, infrastructure, security, and the fundamentals. Here are some key examples:</p>
          <div className={styles.certsContainer}>
            {certifications.map((cert) => (
              <div key={cert.title} className={styles.certificate}>
                <a href={cert.credentialUrl} target="_blank">
                  <img src={cert.badge} alt={`${cert.title} Badge`} />
                  <p className={styles.certificateTitle}>{cert.title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        
      </main>
    </Layout>
  );
}

export default About;