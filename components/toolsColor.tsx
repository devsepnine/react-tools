import styles from 'styles/colors.module.scss';
import { changeHEXtoRGB, changeRGBtoHSL } from '../shared/ts/color';
import { TcolorObject } from '../shared/type/color';

export default function ToolsColor({ colors }: { colors: TcolorObject[] }) {
  return (
    <>
      <div className={'sample'}>
        <div className={styles['list-color']}>
          <div className={`${styles.color} ${styles.title}`}>
            <div>Name</div>
            <div>Color</div>
            <div>HEX</div>
            <div>RGB</div>
            <div>HSL</div>
          </div>
          {colors.map((color: TcolorObject, index: number) => (
            <div key={'color-' + index} className={styles['color']}>
              <div className={styles['color-title']}>{color.name}</div>
              <div className={styles['color-sample']}>
                <div
                  className={styles['sample']}
                  style={{
                    backgroundColor: color.light,
                  }}
                ></div>
              </div>
              <div className={'color_hex'}>{color.light}</div>
              <div className={'color_rgb'}>
                {changeHEXtoRGB(color.light)?.join(' ')}
              </div>
              <div className={'color_hsl'}>
                {changeRGBtoHSL(changeHEXtoRGB(color.light))?.join(' ')}
              </div>

              <div className={styles['color-sample']}>
                <div
                  className={styles['sample']}
                  style={{
                    backgroundColor: color.dark,
                  }}
                ></div>
              </div>
              <div className={'color_hex'}>{color.dark}</div>
              <div className={'color_rgb'}>
                {changeHEXtoRGB(color.dark)?.join(' ')}
              </div>
              <div className={'color_hsl'}>
                {changeRGBtoHSL(changeHEXtoRGB(color.dark))?.join(' ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
