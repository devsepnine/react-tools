import {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styles from './imageComparison.module.scss';
import twitchImage from '../../../public/static/images/twitch.png';
import youtubeImage from '../../../public/static/images/youtube.png';
import Image from 'next/image';
import Link from 'next/link';

const ImageComparison = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0 });
  const [width1, setWidth1] = useState(0);
  const [layerInfo, setLayerInfo] = useState({ width: 0, height: 0 });

  const onMouseMove = useCallback(
    (event: any) => {
      if (pressed) {
        setPosition({
          x: position.x + event.movementX,
        });
      }
    },
    [position.x, pressed],
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setPosition({
      x: window.innerWidth / 2,
    });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (line.current) {
      line.current.style.transform = `translate(${position.x}px, 0px)`;
    }
    handleResize();
  }, [position]);

  const handleResize = () => {
    const layerbr = layerRef.current?.getBoundingClientRect();
    const barRef = line.current?.getBoundingClientRect();
    if (layerbr && barRef) {
      setLayerInfo({
        width: layerbr.width,
        height: layerbr.height,
      });
      setWidth1(Math.abs(layerbr.left - barRef.x));
    }
  };
  const cropStyle = useMemo(() => {
    return {
      '--clip1': `0, ${layerInfo.width}px, ${layerInfo.height}px, ${width1}px`,
      '--clip2': `0, ${width1}px, ${layerInfo.height}px, 0`,
    };
  }, [width1, layerInfo.width, layerInfo.height]) as CSSProperties;
  return (
    <div>
      <h1>
        <Link href={'https://www.twitch.tv/ylizhi0331'}>
          <a> Lizhi0331</a>
        </Link>
      </h1>

      <div
        ref={layerRef}
        className={styles['image-box']}
        style={cropStyle}
        onMouseMove={onMouseMove}
        onMouseLeave={() => setPressed(false)}
        onMouseUp={() => setPressed(false)}
      >
        <div className={styles['box__twitch-image']}>
          <Image
            src={twitchImage}
            alt="twitch"
            width={2843}
            height={1600}
            quality={100}
          />
        </div>
        <div className={styles['box__youtube-image']}>
          <Image
            src={youtubeImage}
            alt="youtube"
            width={2843}
            height={1600}
            quality={100}
          />
        </div>
        <div
          ref={line}
          className={styles['line']}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
        >
          <span>{'<->'}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;