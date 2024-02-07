import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import {
  List,
  ListItem,
} from '@chakra-ui/react';

// styles
import './styles.scss';
// components
import { Button, SearchBar, UploadButton } from '../../components';
// context
import { useAuth } from '../../context';
// img
import { AvatarImg } from '../../assets/img';

const graduates = [
  {sn: "Smith", fn: "Kat", isAlumni: true, department: "B.A. Public Policy", year: "2022", hour: "1st"},
  {sn: "Smith", fn: "Jo", isAlumni: false, department: "B.S. Business", year: "2023", hour: "3rd"},
  {sn: "Tay", fn: "Lin", isAlumni: false, department: "B.S. Comp. Sci.", year: "2024", hour: "4th"},
  {sn: "James", fn: "Ty", isAlumni: false, department: "B.A. Public Policy", year: "2022", hour: "8th"},
  {sn: "Philips", fn: "Bo", isAlumni: true, department: "B.A. Public Policy", year: "2022", hour: "12th"},
  {sn: "Kay", fn: "Kelly", isAlumni: true, department: "B.A. Public Policy", year: "2022", hour: "2nd"},
  {sn: "Star", fn: "Samat", isAlumni: true, department: "B.A. Public Policy", year: "2022", hour: "2nd"},
];

export const AdminStudents = () => {
  const auth = useAuth();
  const [upcomingGrads, setUpcomingGrads] = useState('');
  const [enrolledStudents, setEnrolledStudents] = useState('');

  const filterGraduates = (searchTerm: string) => graduates.filter((graduate) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return (
      (graduate.fn + ' ' + graduate.sn).toLowerCase().includes(lowerCaseSearchTerm) ||
      graduate.department.toLowerCase().includes(lowerCaseSearchTerm) ||
      (graduate.isAlumni ? "Alumni" : "Student").toLowerCase().includes(lowerCaseSearchTerm) ||
      graduate.year.toLowerCase().includes(lowerCaseSearchTerm) ||
      graduate.hour.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  const filteredUpcomingGrads = filterGraduates(upcomingGrads);
  const filteredEnrolledStudents = filterGraduates(enrolledStudents);

  useEffect(() => {
    console.log(auth)
  }, [])

  return (
    <div className='adminStudents'>
      <div className='adminStudents__header'>
        <div className='adminStudents__headerTitle'>
          {"My Students"}
        </div>
        <div>
          <span className='adminStudents__userName'>
            {auth.userProfile?.user?.firstName + " " + auth.userProfile?.user?.lastName}
          </span>
          <span className='adminStudents__userRole'>
            &nbsp;{"(Admin Owner)"} 
          </span>
        </div>
      </div> 
      <div className='adminStudents__container'>
        <div className='generalPanel'>
          <div className='generalPanel__header'>
            <p className='generalPanel__title'>Upcoming Graduates (Total: {graduates.length})</p>
            <Button
              buttonType={'outline'}
              color={'grey'}
              // onClick={() => setCurrentPlan(plan)}
              text={"Edit"}   
              className='mr16 generalPanel__button'
            />
            <Button
              buttonType={'full'}
              color={'blue'}
              // onClick={() => setCurrentPlan(plan)}
              text={"Show Full List"}   
              className='generalPanel__button'
            />
          </div>
          <SearchBar callBack={(value) => setUpcomingGrads(value)}/>
          <List spacing={3}>
              <ListItem className='listPanel__header'>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'></span>
                </div>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'>Name</span>
                </div>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'>Major</span>
                </div>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'>Status</span>
                </div>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'>Year</span>
                </div>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'>Class</span>
                </div>
              </ListItem>
          </List>
          <div className='listPanel listPanel__noBorder'>
            <List spacing={3}>
              {
                filteredUpcomingGrads.map((item, index) => {
                  return (
                    <ListItem className='listPanel__item' key={index}>
                      <div className='listPanel__img justify-center'>
                        <img
                          src={AvatarImg}
                          className="listPanel__avatar"
                          alt='Graduates List Avatar'
                        />
                      </div>
                      <div className='justify-center'>
                        <span className='listPanel__mainTitle'>{item.fn + " " + item.sn}</span>
                      </div>
                      <div className='justify-center'>
                        <span className='listPanel__normalTitle'>{item.department}</span>
                      </div>
                      <div className='justify-center'>
                        <Button
                          buttonType={'full'}
                          color={'grey'}
                          // onClick={() => setCurrentPlan(plan)}
                          text={item.isAlumni ? "Alumni" : "Student"}
                          className='listPanel__button'
                        />
                      </div>
                      <div className='justify-center'>
                        <span className='listPanel__smallTitle'>{item.hour} year</span>
                      </div>
                      <div className='justify-center'>
                        <span className='listPanel__smallTitle'>{item.year}</span>
                      </div>
                    </ListItem>
                  )
                })
              }
            </List>
          </div>
        </div>
      </div>
      <div className='adminStudents__container'>
        <div className='generalPanel'>
          <div className='generalPanel__header'>
            <p className='generalPanel__title'>Other Enrolled Students (Total: {graduates.length})</p>
            <Button
              buttonType={'outline'}
              color={'grey'}
              // onClick={() => setCurrentPlan(plan)}
              text={"Edit"}   
              className='mr16 generalPanel__button'
            />
            <Button
              buttonType={'full'}
              color={'blue'}
              // onClick={() => setCurrentPlan(plan)}
              text={"Show Full List"}   
              className='generalPanel__button'
            />
          </div>
          <SearchBar callBack={(value) => setEnrolledStudents(value)}/>
          <List spacing={3}>
              <ListItem className='listPanel__header'>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'></span>
                </div>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'>Name</span>
                </div>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'>Major</span>
                </div>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'>Status</span>
                </div>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'>Year</span>
                </div>
                <div className='justify-center'>
                  <span className='listPanel__mainTitle'>Class</span>
                </div>
              </ListItem>
          </List>
          <div className='listPanel'>
            <List spacing={3}>
            {
                filteredEnrolledStudents.map((item, index) => {
                  return (
                    <ListItem className='listPanel__item' key={index}>
                      <div className='listPanel__img justify-center'>
                        <img
                          src={AvatarImg}
                          className="listPanel__avatar"
                          alt='Graduates List Avatar'
                        />
                      </div>
                      <div className='justify-center'>
                        <span className='listPanel__mainTitle'>{item.fn + " " + item.sn}</span>
                      </div>
                      <div className='justify-center'>
                        <span className='listPanel__normalTitle'>{item.department}</span>
                      </div>
                      <div className='justify-center'>
                        <Button
                          buttonType={'full'}
                          color={'grey'}
                          // onClick={() => setCurrentPlan(plan)}
                          text={item.isAlumni ? "Alumni" : "Student"}
                          className='listPanel__button'
                        />
                      </div>
                      <div className='justify-center'>
                        <span className='listPanel__smallTitle'>{item.hour} year</span>
                      </div>
                      <div className='justify-center'>
                        <span className='listPanel__smallTitle'>{item.year}</span>
                      </div>
                    </ListItem>
                  )
                })
              }
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};
