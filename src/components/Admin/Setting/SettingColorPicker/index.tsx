import React, { FC, HTMLAttributes, useState } from 'react';

//styles
import './styles.scss';
//components
import { Button, ColorPicker } from '../../../../components';

type ColorType = {
  id: number;
  color: string;
}

interface AdminSettingColorPickerProps extends HTMLAttributes<HTMLDivElement> {}

export const AdminSettingColorPicker: FC<AdminSettingColorPickerProps> = () => {
  const [colors, setColors] = useState<ColorType[]>([])

  const addColor = (color: string) => {
    setColors([...colors, {id: colors.length, color:color}])
    console.log(colors)
  }

  return (
    <div className='generalPanel'>
      <div className='generalPanel__header'>
        <p className='generalPanel__title'>My Colors</p>
        <Button
          buttonType={'full'}
          color={'blue'}
          // onClick={() => setCurrentPlan(plan)}
          text={"Edit"}
          className='generalPanel__button'
        />
      </div>
      <div className='colorPickerPanel'>
        {colors.map((item, index) => (
          <ColorPicker key={index} color={item.color} type='display'/>
        ))}
        <ColorPicker type='add' onChange={addColor}/>
      </div>
    </div>
  );
};
