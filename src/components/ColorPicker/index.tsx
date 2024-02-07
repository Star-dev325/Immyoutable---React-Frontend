import React, { FC, InputHTMLAttributes, useState } from 'react';
import { SketchPicker } from 'react-color';
//styles
import './styles.scss';

import {
  pickerAddIcon,
} from '../../assets/icons';

interface ColorPickerProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: any;
  onChange?: (value: any) => void;
  disabled?: boolean;
  type?: string;
}

export const ColorPicker: FC<ColorPickerProps> = ({
  color = '#000',
  onChange = () => {},
  disabled = false,
  type = 'display'
}) => {
  const [openPickerState, setOpenPickerState] = useState<boolean>(false);
  const [colorVal, setColorVal] = useState<string>(color);

  const openPicker = () => {
    setOpenPickerState(true)
  }

  const closePicker = () => {
    setOpenPickerState(false)
  }

  const handleChange = (value: any) => {
    setColorVal(value.hex)
    onChange(value.hex)
    if (type === 'add') closePicker()
  };

  return (
    <div 
      className='colorPicker'
      onClick={openPicker}
      onMouseLeave={closePicker}
    >
      {type === 'display' ?
        (
          <div 
            className='colorPicker__circle mr24' 
            style={{backgroundColor: colorVal}}
          ></div>
        )
        :
        (
          <img
            src={pickerAddIcon}
            className='colorPicker__addPicker'
            alt='sidebar-icon'
          />
        )}
      <SketchPicker 
        className={`colorPicker__sketch colorPicker__sketch--${openPickerState ? 'open' : 'close'}`}
        onChangeComplete={handleChange}
        color={colorVal}
      />
    </div>
  );
};
