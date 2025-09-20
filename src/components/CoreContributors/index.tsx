// src/components/CoreContributors/index.tsx
import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { FaForumbee } from 'react-icons/fa';

// const filters = ['All', 'Europe', 'North America', 'Latin America', 'Asia Pacific'];

const colleges = [
  {
    name: 'UMN Blockchain', 
    image: 'https://pbs.twimg.com/profile_images/1468318721810784262/qsdj-RI8_400x400.jpg',
    social: 'https://www.umnbc.org/'
  },
  {
    name: 'CollegeDAO',
    image: 'https://pbs.twimg.com/profile_images/1726788449674420224/9DOU-V7Z_400x400.jpg',
    social: 'https://collegedao.io/'
  },
  {
    name: 'Illini Blockchain',
    image: 'https://cdn-images-1.medium.com/max/280/1*z7_fWm1Ioy5s2W1-H2TK3w@2x.png',
    social: 'https://illiniblockchain.com/'
  },
  {
    name: 'Titan Blockchain',
    image: 'https://pbs.twimg.com/profile_images/1884097937019383808/SBTgA62Y_400x400.jpg',
    social: 'https://x.com/CSUFBlockchain',
  },
  {
    name: 'Midwest Blockchain Conference',
    image: 'https://pbs.twimg.com/profile_images/1807516634539597824/YAr0BGVk_400x400.jpg',
    social: 'https://x.com/MBC_Conference',
  },

  

  // { name: 'Blockchain at Berkeley', image: '/img/universities/berkeley.png' },
  // { name: 'SMU Blockchain Club', image: '/img/universities/smu.png' },
  // { name: 'Michigan Blockchain', image: '/img/universities/michigan.png' },
  // { name: 'Waterloo Blockchain', image: '/img/universities/waterloo.png' },
  // { name: 'Cambridge Blockchain Society', image: '/img/universities/cambridge.png' },
  // { name: 'Cornell Blockchain', image: '/img/universities/cornell.png' },
  // { name: 'Vanderbilt Blockchain', image: '/img/universities/vanderbilt.png' },
  // { name: 'TUM Blockchain', image: '/img/universities/tum.png' },
  // { name: 'Illini Blockchain', image: '/img/universities/illini.png' },
  // { name: 'Texas Blockchain', image: '/img/universities/texas.png' },
  // { name: 'ITU Blockchain', image: '/img/universities/itu.png' },
  // { name: 'ITA Blockchain', image: '/img/universities/ita.png' },
  // { name: 'Princeton Blockchain Club', image: '/img/universities/princeton.png' },
  // { name: 'Franklin DAO', image: '/img/universities/franklin.png' },
  // { name: 'UCalgary Blockchain Society', image: '/img/universities/ucalgary.png' },
];

export default function CoreContributors() {
  return (
    <section className={clsx('padding-vert--xl')}>
      <div className="container text--center">
        <p className="hero__title">Organizations we've chatted with</p>
        <div className={styles.logoGrid}>
          {colleges.map(({ name, image, social }) => (
            <div key={name} className={styles.logoItem}>
              <img src={image} alt={name} />
              <a target="_blank" href={social}>{name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}