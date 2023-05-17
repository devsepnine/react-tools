import { NextPage } from 'next';
import ToolsColor from '../../components/toolsColor';
import InputColor from '../../components/inputColor';
import { useState } from 'react';
import ColorTextView from '../../components/colorTextView';
import { TcolorObject } from '../../shared/type/color';

const Color: NextPage = () => {
  const [colors, setColors] = useState<TcolorObject[]>([
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
      name: 'mono-04-elevate',
      light: '#ffffff',
      dark: '#222222',
    },
    {
      name: 'grey-00',
      light: '#444444',
      dark: '#9c9c9c',
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
      dark: '#426fff',
    },
    {
      name: 'blue-02',
      light: '#5880FE',
      dark: '#496edf',
    },
    {
      name: 'sub-blue-01',
      light: '#e5ecff',
      dark: '#426fff',
    },
    {
      name: 'green-01',
      light: '#00AD90',
      dark: '#018a73',
    },
    {
      name: 'sub-green-01',
      light: '#00C7A6',
      dark: '#00b496',
    },
    {
      name: 'orange-01',
      light: '#FB7F41',
      dark: '#dc6c34',
    },
    {
      name: 'sub-red-01',
      light: '#F91949',
      dark: '#c31339',
    },
  ]);

  const addColor = (color: never) => {
    setColors([...colors, color]);
  };

  return (
    <>
      <InputColor addColor={addColor}></InputColor>
      <ToolsColor colors={colors}></ToolsColor>
      <ColorTextView colors={colors}></ColorTextView>
    </>
  );
};
export default Color;
