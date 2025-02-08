import React, { useState } from 'react';
import Image from 'next/image';
import styles from './HowItWorks.module.css';
import chartImage from "../assets/image2.jpeg"; // Replace with your image path
import { ChevronDown } from 'lucide-react'; // Arrow Icon for toggle
import greydots from "../assets/greydot.svg"
import wave from "../assets/wave.svg"

const steps = [
  { title: "Complete Profile", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Search Vacancies", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Apply Jobs", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const HowItWorks = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const handleExpand = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section className={styles.container}>
      <div className={styles.textSection}>
        <h3 className={styles.subtitle}>How it works</h3>
        <h2 className={styles.title}>
          Start find a job you love <br /> with us easily
        </h2>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.stepCard} ${styles[`stepCard${index + 1}`]}`}
            >
              <div className={styles.stepHeader} onClick={() => handleExpand(index)}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <ChevronDown
                  className={`${styles.arrowIcon} ${
                    expandedStep === index ? styles.rotated : ''
                  }`}
                />
              </div>
              <div
                className={`${styles.stepContentWrapper} ${
                  expandedStep === index ? styles.expanded : ''
                }`}
              >
                <p className={styles.stepContent}>{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imageSection}>
  {/* Grey Dots as a Graphic Element */}
  <Image src={greydots} alt="Grey Dots" className={styles.greydots} />
  <Image src={wave} alt="wave" className={styles.wave} />
  
  {/* Main Chart Image */}
  <Image src={chartImage} alt="Charts and analysis" className={styles.image} />
</div>
    </section>
  );
};

export default HowItWorks;
