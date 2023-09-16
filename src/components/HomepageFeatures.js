import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Electronics',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore my passion for technology in the world of electronics, with a special focus on microcontrollers! I will be documenting my ongoing projects. 
      </>
    ),
  },
  {
    title: 'Coding',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Personally, I enjoy coding and have found that Python has become my go to language, but I have experience with a range of languages. I'm going to be showcasing any exciting coding projects I'm working on.
      </>
    ),
  },
  {
    title: 'Cloud Computing',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I'll be sharing my knowledge and documenting fascinating home projects that showcase the power and versatility of cloud technology. I have become highly specilaised in Microsoft Azure.
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
