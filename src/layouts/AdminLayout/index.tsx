import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

//styles
import './styles.scss';
//constants
import { ROUTES, adminSidebarMenu } from '../../constants';
//context
import { useAuth } from '../../context';
//components
import { SidebarMenu } from '../../components';

export const AdminLayout = () => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.token && !auth.initLoadingToken) {
    return <Navigate to={ROUTES.signIn} state={{ from: location }} replace />;
  }
  return (
    <div className='adminLayout'>
      <SidebarMenu items={adminSidebarMenu} />
      <div className='adminLayout__container'>
        <Outlet />
      </div>
    </div>
  );
};
