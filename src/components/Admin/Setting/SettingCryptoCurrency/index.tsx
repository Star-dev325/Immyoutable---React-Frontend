import React, { FC, HTMLAttributes } from 'react';

//styles
import './styles.scss';
//components
import { Button } from '../../../../components';

interface AdminSettingCryptoCurrencyProps extends HTMLAttributes<HTMLDivElement> { }

export const AdminSettingCryptoCurrency: FC<AdminSettingCryptoCurrencyProps> = () => {

  return (
    <div className='generalPanel'>
      <div className='generalPanel__header'>
        <p className='generalPanel__title'>Cryptocurrency Data</p>
        <Button
          buttonType={'full'}
          color={'blue'}
          // onClick={() => setCurrentPlan(plan)}
          text={"Edit"}
          className='generalPanel__button'
        />
      </div>
    </div>
  );
};
