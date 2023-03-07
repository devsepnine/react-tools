import { NextPage } from 'next'
import ToolsColor from '../../components/toolsColor'
import InputColor from '../../components/inputColor'
import { useState } from 'react'
import ColorTextView from '../../components/colorTextView'

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
      light: '#bbbbbb',
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
      dark: '#1c1c1c',
    },
    {
      name: 'blue-01',
      light: '#3464FE',
      dark: '#3464FE',
    },
    {
      name: 'blue-02',
      light: '#5880FE',
      dark: '#5880FE',
    },
    {
      name: 'sub-blue-01',
      light: '#e5ecff',
      dark: '#e5ecff',
    },
    {
      name: 'green-01',
      light: '#00AD90',
      dark: '#00AD90',
    },
    {
      name: 'sub-green-01',
      light: '#00C7A6',
      dark: '#00C7A6',
    },
    {
      name: 'orange-01',
      light: '#FB7F41',
      dark: '#FB7F41',
    },
    {
      name: 'sub-red-01',
      light: '#F91949',
      dark: '#F91949',
    },
  ])

  const addColor = (color: never) => {
    setColors([...colors, color])
  }

  return (
    <>
      <InputColor addColor={addColor}></InputColor>
      <ToolsColor colors={colors}></ToolsColor>
      <ColorTextView colors={colors}></ColorTextView>
    </>
  )
}
export default Color
