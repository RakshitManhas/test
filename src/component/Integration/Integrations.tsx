import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Integrations.module.css";

export type IntegrationsType = {
  className?: string;
};

const Integrations: FunctionComponent<IntegrationsType> = ({ className = "" }) => {

  const [imageSrc, setImageSrc] = useState('assets/vector-123.svg');

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 768) {
        setImageSrc('assets/vector-mobile768.png');
      } else {
        setImageSrc('assets/vector-123.svg');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className={`${styles.integrationsContainer} ${className}`} id="Integrations" >
      <div className={styles.integrations}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>
            <span>Top</span>
            <b className={styles.l2Integrations}> L2 Integrations</b>
          </h1>
        </div>
        <div className={styles.iconGrid}>
          <div className={styles.iconContainer}>
            <div className={styles.iconCircle} />
            <img
              className={styles.iconImage}
              loading="lazy"
              alt="1 M"
              src="assets/icons/image-17-1@2x.png"
            />
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.iconCircle} />
            <img
              className={styles.iconImage}
              loading="lazy"
              alt="2 "
              src="assets/icons/image-17@2x.png"
            />
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.iconCircle} />
            <img
              className={styles.iconImage}
              loading="lazy"
              alt="3"
              src="assets/icons/image-19@2x.png"
            />
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.iconCircle} />
            <img
              className={styles.iconImage}
              loading="lazy"
              alt="4"
              src="assets/icons/image-16@2x.png"
            />
          </div> 
          <div className={styles.iconContainer}>
            <div className={styles.iconCircle} />
            <img
              className={styles.iconImage}
              loading="lazy"
              alt="6"
              src="assets/icons/image-20@2x.png"
            />
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.iconCircle} />
            <img
              className={styles.iconImage}
              loading="lazy"
              alt="5"
              src="assets/icons/image-20-1@2x.png"
            />
          </div>
        </div>
        <img
          className={styles.vectorBG}
          alt="Vector"
          src={imageSrc}
        />
      </div>
    </div>
  );
};

export default Integrations;
