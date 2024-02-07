import { useContext } from 'react';
import { AuthContext } from './auth/context';
import { DesignContext } from './design/context';
import { MetamaskContext } from './metamask/context';
import { CommonContext } from './common/context';
import { ProfileContext } from './profile/context';
import { AdminContext } from './admin/context';

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useDesign = () => {
  return useContext(DesignContext);
};

export const useMetamask = () => {
  return useContext(MetamaskContext);
};

export const useCommon = () => {
  return useContext(CommonContext);
};

export const useProfile = () => {
  return useContext(ProfileContext);
};

export const useAdmin = () => {
  return useContext(AdminContext);
};

export { AppContextProvider } from './AppContextProvider';
