import React from 'react';

import { useAdminProvider } from './useAdminProvider';
//types
import {
  GraduateInfoType,
} from './types';
import { ResponseType } from '../types';

export interface AdminState {
  getGraduatesList: () => Promise<ResponseType>;
  getUpcomingGraduatesList: () => Promise<ResponseType>;
  getEnrolledStudentsList: () => Promise<ResponseType>;
}

export const AdminContext = React.createContext<AdminState>(null!);

interface AdminProps {
  children: React.ReactNode;
}

export const AdminProvider = ({ children }: AdminProps) => {
  const admin = useAdminProvider();

  return (
    <AdminContext.Provider value={admin}>
      {children}
    </AdminContext.Provider>
  );
};
