import { useState } from 'react';
//axios
import axiosApiInstance from '../../api/axios';
//types
import {
  GraduateInfoType,
} from './types';

import { AvatarImg } from '../../assets/img';

const graduates = [
  {sn: "Smith", mn:"", fn: "Kat", isAlumni: true, major: "B.A. Public Policy", class: "2022", hour: "1", avatar: AvatarImg, eduEmail: 'student+1@std.edu', universityID: 1, universityName: 'Young Harris College', honor: 'Cum Laude', issueDate: ''},
  {sn: "Smith", mn:"", fn: "Jo", isAlumni: false, major: "B.S. Business", class: "2023", hour: "3", avatar: AvatarImg, eduEmail: 'student+1@std.edu', universityID: 1, universityName: 'Young Harris College', honor: 'Cum Laude', issueDate: ''},
  {sn: "Tay", mn:"", fn: "Lin", isAlumni: false, major: "B.S. Comp. Sci.", class: "2024", hour: "4", avatar: AvatarImg, eduEmail: 'student+1@std.edu', universityID: 1, universityName: 'Young Harris College', honor: 'Cum Laude', issueDate: ''},
  {sn: "James", mn:"", fn: "Ty", isAlumni: false, major: "B.A. Public Policy", class: "2022", hour: "8", avatar: AvatarImg, eduEmail: 'student+1@std.edu', universityID: 1, universityName: 'Young Harris College', honor: 'Cum Laude', issueDate: ''},
  {sn: "Philips", mn:"", fn: "Bo", isAlumni: true, major: "B.A. Public Policy", class: "2022", hour: "12", avatar: AvatarImg, eduEmail: 'student+1@std.edu', universityID: 1, universityName: 'Young Harris College', honor: 'Cum Laude', issueDate: ''},
  {sn: "Kay", mn:"", fn: "Kelly", isAlumni: true, major: "B.A. Public Policy", class: "2022", hour: "2", avatar: AvatarImg, eduEmail: 'student+1@std.edu', universityID: 1, universityName: 'Young Harris College', honor: 'Cum Laude', issueDate: ''},
  {sn: "Star", mn:"", fn: "Samat", isAlumni: true, major: "B.A. Public Policy", class: "2022", hour: "2", avatar: AvatarImg, eduEmail: 'student+1@std.edu', universityID: 1, universityName: 'Young Harris College', honor: 'Cum Laude', issueDate: ''},
  {sn: "James", mn:"", fn: "Ty", isAlumni: false, major: "B.A. Public Policy", class: "2022", hour: "8", avatar: AvatarImg, eduEmail: 'student+1@std.edu', universityID: 1, universityName: 'Young Harris College', honor: 'Cum Laude', issueDate: ''},
  {sn: "Philips", mn:"", fn: "Bo", isAlumni: true, major: "B.A. Public Policy", class: "2022", hour: "12", avatar: AvatarImg, eduEmail: 'student+1@std.edu', universityID: 1, universityName: 'Young Harris College', honor: 'Cum Laude', issueDate: ''},
  {sn: "Kay", mn:"", fn: "Kelly", isAlumni: true, major: "B.A. Public Policy", class: "2022", hour: "2", avatar: AvatarImg, eduEmail: 'student+1@std.edu', universityID: 1, universityName: 'Young Harris College', honor: 'Cum Laude', issueDate: ''},
  {sn: "Star", mn:"", fn: "Samat", isAlumni: true, major: "B.A. Public Policy", class: "2022", hour: "2", avatar: AvatarImg, eduEmail: 'student+1@std.edu', universityID: 1, universityName: 'Young Harris College', honor: 'Cum Laude', issueDate: ''},
];

export function useAdminProvider() {


  const getGraduatesList = async () => {
    try {
      // const { data } = await axiosApiInstance.get(
      //   `admin/get/graduates`
      // );
      // console.log('getMarketInfoById data', data);
      return { err: false, data: graduates };
    } catch (e: any) {
      // console.log('getMarketInfoById error', e);
      return {
        err: true,
        data: e?.response?.data?.message || 'Server Error',
      };
    }
  };

  const getUpcomingGraduatesList = async () => {
    try {
      // const { data } = await axiosApiInstance.get(
      //   `admin/get/graduates`
      // );
      // console.log('getMarketInfoById data', data);
      return { err: false, data: graduates };
    } catch (e: any) {
      // console.log('getMarketInfoById error', e);
      return {
        err: true,
        data: e?.response?.data?.message || 'Server Error',
      };
    }
  };

  const getEnrolledStudentsList = async () => {
    try {
      // const { data } = await axiosApiInstance.get(
      //   `admin/get/graduates`
      // );
      // console.log('getMarketInfoById data', data);
      return { err: false, data: graduates };
    } catch (e: any) {
      // console.log('getMarketInfoById error', e);
      return {
        err: true,
        data: e?.response?.data?.message || 'Server Error',
      };
    }
  };

  return {
    getGraduatesList,
    getUpcomingGraduatesList,
    getEnrolledStudentsList,
  };
}
