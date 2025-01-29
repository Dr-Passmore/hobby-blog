import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

// Feature List with Images and Tags
const FeatureList = [
  {
    title: 'Electronics',
    images: [
      'https://personalblogimages.blob.core.windows.net/websiteimages/calibre-project-pi-case.jpg',
      'https://personalblogimages.blob.core.windows.net/websiteimages/Tide Display 2023-09-02 at 17.29.50.jpg',
    ],
    tag: 'electronics',
    description: (
      <>
        Explore my passion for technology in the world of electronics, with a special focus on microcontrollers! I will be documenting my ongoing projects.
      </>
    ),
  },
  {
    title: 'Coding',
    images: [
      'https://via.placeholder.com/300x200.png?text=Coding+Project+1',
      'https://via.placeholder.com/300x200.png?text=Coding+Project+2',
    ],
    tag: 'coding',
    description: (
      <>
        I have experience with a range of languages, but my go-to language has become Python. I'm going to be showcasing any exciting coding projects I'm working on.
      </>
    ),
  },
  {
    title: 'Cloud Computing',
    images: [
      'https://via.placeholder.com/300x200.png?text=Cloud+Project+1',
      'https://via.placeholder.com/300x200.png?text=Cloud+Project+2',
    ],
    tag: 'cloud-computing',
    description: (
      <>
        I'll be sharing my knowledge and documenting fascinating home projects that showcase the power and versatility of cloud technology. I have become highly specialised in Microsoft Azure.
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