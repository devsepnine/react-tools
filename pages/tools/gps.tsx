import { CSSProperties, useMemo, useState } from 'react';
import styles from './gps.module.scss';
import html2canvas from 'html2canvas';

const Gps = () => {
  const [lat, setLat] = useState('36.2978539');
  const [lng, setLng] = useState('139.9879522');
  const [msl, setMsl] = useState('85');
  const [azimuth, setAzimuth] = useState('N/A');
  const [tilt, setTilt] = useState('-0.96');
  const [date, setDate] = useState('2023.05.08 15:30:1');
  const [ms, setMs] = useState('5');
  const [roll, setRoll] = useState('0.27');
  const [battery, setBattery] = useState(100);
  const handleBtn = () => {
    const element = document.getElementById('gps') as HTMLElement;
    html2canvas(element, {
      allowTaint: true,
      removeContainer: true,
      backgroundColor: null,
      imageTimeout: 15000,
      logging: true,
      scale: 1,
      useCORS: true,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    }).then((canvas) => {
      onSaveAs(canvas.toDataURL('image/png'), 'download.png');
      // document.body.appendChild(canvas);
    });
  };

  const onSaveAs = (uri: string, filename: string) => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  const batteryStyle = useMemo(() => {
    return {
      '--percent': `${battery}%`,
      '--bgPercent': battery === 100 ? '100%' : `95%`,
    };
  }, [battery]) as CSSProperties;
  return (
    <>
      <div>
        <div id={'gps'} className={styles['wrapper__gps']}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={'/static/images/gps.png'}
            alt="gps"
            className={styles['image__gps']}
          />
          <button
            className={styles['button__screenshot']}
            onClick={handleBtn}
          ></button>
          <div className={styles['blind__lat']}></div>
          <div className={`${styles['text__lat']} ${styles['text__base']}`}>
            {lat}
          </div>
          <div className={`${styles['text__lng']} ${styles['text__base']}`}>
            {lng}
          </div>
          <div className={`${styles['text__msl']} ${styles['text__base']}`}>
            {msl}
          </div>
          <div
            className={`${styles['text__azimuth']} ${styles['text__right']}`}
          >
            {azimuth}
          </div>
          <div className={`${styles['text__tilt']} ${styles['text__right']}`}>
            {tilt}
          </div>
          <div className={`${styles['text__roll']} ${styles['text__right']}`}>
            {roll}
          </div>
          <div className={styles['text__date']}>
            {date}
            <span className={styles['text__ms']}>{ms}</span>
          </div>
          <div className={styles['block__battery']} style={batteryStyle}></div>
        </div>
        <div className={styles['wrapper__input']}>
          <div>
            <div>LAT :</div>
            <input
              type={'text'}
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
          </div>
          <div>
            <div>LNG :</div>
            <input
              type={'text'}
              value={lng}
              onChange={(e) => setLng(e.target.value)}
            />
          </div>
          <div>
            <div>MSL :</div>
            <input
              type={'text'}
              value={msl}
              onChange={(e) => setMsl(e.target.value)}
            />
          </div>
          <div>
            <div>AZIMUTH :</div>
            <input
              type={'text'}
              value={azimuth}
              onChange={(e) => setAzimuth(e.target.value)}
            />
          </div>
          <div>
            <div>TILT :</div>
            <input
              type={'text'}
              value={tilt}
              onChange={(e) => setTilt(e.target.value)}
            />
          </div>
          <div>
            <div>ROLL :</div>
            <input
              type={'text'}
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>
          <div>
            <div>DATE :</div>
            <input
              type={'text'}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <div>MS :</div>
            <input
              type={'text'}
              value={ms}
              onChange={(e) => setMs(e.target.value)}
            />
          </div>
          <div>
            <div>BATTERY:</div>
            <input
              type={'range'}
              min={0}
              max={100}
              value={battery}
              onChange={(e) => setBattery(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Gps;
