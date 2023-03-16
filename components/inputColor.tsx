import { useState } from 'react';

export default function InputColor(props: any) {
  const [newColor, setNewColor] = useState({
    lightColor: '',
    darkColor: '',
    name: '',
  });

  const onChangeColor = (e: any) => {
    setNewColor((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <div>
        <input
          name={'name'}
          type={'text'}
          value={newColor.name}
          onChange={onChangeColor}
        />
        <input
          type={'color'}
          name={'lightColor'}
          value={newColor.lightColor}
          onChange={onChangeColor}
        />
        <input
          type={'color'}
          name={'darkColor'}
          value={newColor.darkColor}
          onChange={onChangeColor}
        />
        <button
          onClick={() => {
            props.addColor({
              name: newColor.name,
              light: newColor.lightColor,
              dark: newColor.darkColor,
            });
          }}
        >
          add
        </button>
      </div>
    </>
  );
}
