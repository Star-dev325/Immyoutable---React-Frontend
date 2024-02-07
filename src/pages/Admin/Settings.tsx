import React, { useEffect } from 'react';

// styles
import './styles.scss';
// components
import {
  AdminSettingSchool,
  AdminSettingLogo,
  AdminSettingColorPicker,
  AdminSettingCryptoCurrency
} from '../../components';
// context
import { useAuth } from '../../context';

export const AdminSettings = () => {
  const auth = useAuth();
  useEffect(() => {
    console.log(auth)
  }, [])

  return (
    <div className='adminSettings'>
      <div>
        <span className='adminSettings__userName'>
          {auth.userProfile?.user?.firstName + " " + auth.userProfile?.user?.lastName}
        </span>
        <span className='adminSettings__userRole'>
          &nbsp;{"(Admin Owner)"}
        </span>
      </div>
      <div className='adminSettings__container'>
        <AdminSettingSchool />
        <div className='grid grid-c grid-c-2'>
          <AdminSettingLogo />
          <div className='grid grid-r'>
            <AdminSettingColorPicker />
            <AdminSettingCryptoCurrency />
          </div>
        </div>
      </div>
    </div>
  );
};
