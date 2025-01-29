import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

// Feature List with Images and Tags
const FeatureList = [
  {
    title: 'Programming',
    images: [
      'https://personalblogimages.blob.core.windows.net/websiteimages/calibre-project-pi-case.jpg',
      'https://personalblogimages.blob.core.windows.net/websiteimages/Tide Display 2023-09-02 at 17.29.50.jpg',
    ],
    tag: 'programming', // Updated tag
    description: (
      <>
        Explore my passion for technology in the world of programming! I will be documenting my ongoing projects, tutorials, and tips.
      </>
    ),
  },
  {
    title: 'DIY Projects',
    images: [
      'https://via.placeholder.com/300x200.png?text=DIY+Project+1',
      'https://via.placeholder.com/300x200.png?text=DIY+Project+2',
    ],
    tag: 'diy-projects', // Updated tag
    description: (
      <>
        I love building things from scratch. Here, I'll share my DIY projects, including guides and step-by-step tutorials.
      </>
    ),
  },
  {
    title: 'Azure',
    images: [
      'https://via.placeholder.com/300x200.png?text=Azure+Project+1',
      'https://via.placeholder.com/300x200.png?text=Azure+Project+2',
    ],
    tag: 'azure', // Updated tag
    description: (
      <>
        I'll be sharing my knowledge and documenting fascinating projects that showcase the power and versatility of Microsoft Azure.
      </>
    ),
  },
];

// Helper function to select a random image
function getRandomImage(images) {
  if (!images || images.length === 0) {
    console.warn('No images available for selection.');
    return ''; // Return a default image or an empty string
  }
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function Feature({ images, title, description, tag }) {
  const randomImage = getRandomImage(images);

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={`/blog/tags/${tag}`}>
          <img src={randomImage} alt={`${title} preview`} className={styles.featureImg} />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link to={`/blog/tags/${tag}`}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}