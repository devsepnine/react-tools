import gpsImg from '../../public/static/images/gps.png';
import styles from './zuzak.module.scss';
import Image from 'next/image';
import { useState } from 'react';

const Zuzak = () => {
  const [lat, setLat] = useState(36.2978539);
  return (
    <>
      <div>
        <div className={styles['wrapper__zuzak']}>
          <Image
            src={gpsImg}
            alt="gps"
            width={1440}
            height={648}
            quality={100}
          />
          <div className={styles['blind__lat']}></div>
          <div className={`${styles['text__lat']} ${styles['text__base']}`}>
            {lat}
          </div>
        </div>
      </div>
    </>
  );
};

export default Zuzak;
