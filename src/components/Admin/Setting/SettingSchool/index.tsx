import React, { FC, HTMLAttributes, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

//styles
import './styles.scss';
//components
import { Button } from '../../../../components';
import { InputPanel } from './InputPanel';
import { InputTextPanel } from './InputTextPanel';

interface AdminSettingSchoolProps extends HTMLAttributes<HTMLDivElement> { }

type SchoolDate = {
  website: string;
  linkedin: string;
  type: string;
  country: string;
};

export const AdminSettingSchool: FC<AdminSettingSchoolProps> = () => {
  const [mode, setMode] = useState<number>(1);
  const [schoolDate, setSchoolDate] = useState<SchoolDate>({
    website: '',
    linkedin: '',
    type: '',
    country: '',
  });

  const changeMode = () => {
    if (mode === 1) setMode(2)
    if (mode === 2) setMode(1)
  }

  return (
    <div className='generalPanel'>
      {mode === 1 ?
        (
          <InputTextPanel changeMode={changeMode} value={schoolDate} />
        )
        :
        (
          <InputPanel watch={schoolDate} register={setSchoolDate} changeMode={changeMode} />
        )
      }
    </div>
  );
};
