import React from 'react';
import styles from './FeaturedJobs.module.css';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import Link from 'next/link';

const jobs = [
  {
    title: 'Database Programmer',
    company: 'Maximoz Team',
    salary: '$14,000 - $25,000',
    location: 'London, England',
    color: '#4276f0',
    image: profile1,
  },
  {
    title: 'UI/UX Designer',
    company: 'Colo Colo Studios',
    salary: '$14,000 - $25,000',
    location: 'London, England',
    color: '#f39c12',
    image: profile2,
  },
  {
    title: 'Content Writer',
    company: 'Faster WOY Crew',
    salary: '$14,000 - $25,000',
    location: 'London, England',
    color: '#8e44ad',
    image: profile3,
  },
  {
    title: 'Database Programmer',
    company: 'Snailination Studios',
    salary: '$14,000 - $25,000',
    location: 'London, England',
    color: '#16a085',
    image: profile4,
  },
];

const FeaturedJobs = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Featured Jobs</h2>
      <p className={styles.subtitle}>
        Learn ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={styles.jobGrid}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.jobCard} style={{ borderTop: `4px solid ${job.color}` }}>
            <div
              className={styles.jobIcon}
              style={{ backgroundImage: `url(${job.image.src})` }}
            ></div>
            <h3 className={styles.jobTitle}>{job.title}</h3>
            <p className={styles.companyName}>{job.company}</p>
            <p className={styles.salary}>{job.salary} / monthly</p>
            <p className={styles.location}>📍 {job.location}</p>
            <button className={styles.applyButton}>Apply Now</button>
          </div>
        ))}
      </div>
      <Link href="/job">
        <button className={styles.viewMoreButton}>View More</button>
      </Link>
    </section>
  );
};

export default FeaturedJobs;
