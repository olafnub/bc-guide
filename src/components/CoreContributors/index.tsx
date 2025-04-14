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
  }

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
        <h2 className="hero__title">Organizations Involved</h2>
        {/* <div className={styles.filters}>
          {filters.map((f) => (
            <button key={f} className={clsx('button button--secondary button--sm', styles.filterButton)}>
              {f}
            </button>
          ))}
        </div> */}

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