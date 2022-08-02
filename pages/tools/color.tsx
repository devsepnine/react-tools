import { NextPage } from 'next'
import ToolsColor from '../../components/toolsColor'
import InputColor from '../../components/inputColor'
import { useState } from 'react'
import ColorTextView from '../../components/colorTextView'
import Link from 'next/link'

const Color: NextPage = () => {
  const [colors, setColors] = useState([
    {
      name: 'main-txt',
      light: '#555555',
      dark: '#ffffff',
    },
    {
      name: 'mono-01',
      light: '#000000',
      dark: '#eeeeee',
    },
    {
      name: 'mono-02',
      light: '#111111',
      dark: '#eeeeee',
    },
    {
      name: 'mono-03',
      light: '#333333',
      dark: '#bbbbbb',
    },
    {
      name: 'mono-04',
      light: '#ffffff',
      dark: '#1c1c1c',
    },
    {
      name: 'grey-01',
      light: '#555555',
      dark: '#9c9c9c',
    },
    {
      name: 'grey-02',
      light: '#666666',
      dark: '#8c8c8c',
    },
    {
      name: 'grey-03',
      light: '#777777',
      dark: '#8c8c8c',
    },
    {
      name: 'grey-04',
      light: '#888888',
      dark: '#8c8c8c',
    },
    {
      name: 'grey-05',
      light: '#999999',
      dark: '#6c6c6c',
    },
    {
      name: 'grey-06',
      light: '#aaaaaa',
      dark: '#6c6c6c',
    },
    {
      name: 'grey-07',
      light: '#b8b8b8',
      dark: '#6c6c6c',
    },
    {
      name: 'grey-08',
      light: '#cccccc',
      dark: '#4c4c4c',
    },
    {
      name: 'bright-01',
      light: '#dddddd',
      dark: '#333333',
    },
    {
      name: 'bright-02',
      light: '#e8e8e8',
      dark: '#333333',
    },
    {
      name: 'bright-03',
      light: '#eeeeee',
      dark: '#2c2c2c',
    },
    {
      name: 'bright-04',
      light: '#f2f2f2',
      dark: '#2c2c2c',
    },
    {
      name: 'bright-05',
      light: '#f5f5f5',
      dark: '#2c2c2c',
    },
    {
      name: 'bright-06',
      light: '#f7f7f7',
      dark: '#252525',
    },
    {
      name: 'bright-07',
      light: '#fbfbfb',
      dark: '#252525',
    },
    {
      name: 'blue-01',
      light: '#0d84ff',
      dark: '#2078ff',
    },
    {
      name: 'blue-02',
      light: '#3196ff',
      dark: '#408fff',
    },
    {
      name: 'blue-03',
      light: '#5699ff',
      dark: '#408fff',
    },
    {
      name: 'green-01',
      light: '#56c271',
      dark: '#56c271',
    },
    {
      name: 'orange-01',
      light: '#ff9830',
      dark: '#f57555',
    },
    {
      name: 'sub-cyan-01',
      light: '#00BCE4',
      dark: '#00BCE4',
    },
    {
      name: 'sub-blue-01',
      light: '#00aaff',
      dark: '#408fff',
    },
    {
      name: 'sub-red-01',
      light: '#e65050',
      dark: '#f04446',
    },
  ])

  const addColor = (color: any) => {
    setColors([...colors, color])
  }

  return (
    <>
      {/*{JSON.stringify(colors, null, 2)}*/}

      <InputColor addColor={addColor}></InputColor>
      <ToolsColor colors={colors}></ToolsColor>
      <ColorTextView colors={colors}></ColorTextView>
    </>
  )
}
export default Color
