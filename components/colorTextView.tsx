import { Fragment, useState } from 'react'
import styles from '/styles/colorTextView.module.scss'
import { changeHEXtoRGB, changeRGBtoHSL } from '../shared/ts/color'

export default function ColorTextView({ colors }: any) {
  const [options, setOptions] = useState({
    prefix: '--',
    mode: 'hex',
  })
  const modeList = ['hex', 'rgb', 'hsl', 'all']

  const onChangeOptions = (e: any) => {
    setOptions((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  const viewColor = (hex: string) => {
    if (options.mode == modeList[3]) {
      const hsl = changeRGBtoHSL(changeHEXtoRGB(hex))
      return (
        `${hex} | ${changeHEXtoRGB(hex)?.join(', ')} | ` +
        (hsl ? `${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%` : '')
      )
    }
    if (options.mode == modeList[0]) {
      return hex
    } else if (options.mode == modeList[1]) {
      return changeHEXtoRGB(hex)?.join(', ')
    } else {
      const hsl = changeRGBtoHSL(changeHEXtoRGB(hex))
      return hsl ? `${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%` : ''
    }
  }

  return (
    <>
      <input
        name={'prefix'}
        value={options.prefix}
        onChange={onChangeOptions}
      />
      {modeList.map((mode: string, index: number) => (
        <Fragment key={'mode' + index}>
          <input
            name={'mode'}
            value={mode}
            type={'radio'}
            checked={options.mode == mode}
            onChange={onChangeOptions}
          />
          {mode}
        </Fragment>
      ))}

      <div className={styles['table-color_text']}>
        <div>
          {colors.map((color: any, index: number) => (
            <div key={'light-' + index}>
              {options.prefix}
              {color.name} : {viewColor(color.light)};
            </div>
          ))}
        </div>
        <div style={{ color: 'white', backgroundColor: 'black' }}>
          {colors.map((color: any, index: number) => (
            <div key={'dark-' + index}>
              {options.prefix}
              {color.name} : {viewColor(color.dark)};
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
