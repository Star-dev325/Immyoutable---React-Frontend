import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import {
  List,
  ListItem,
} from '@chakra-ui/react';

// styles
import './styles.scss';
// components
import { 
  UploadInput, 
  Button, 
  Checkbox,
  AdminHomeGraduates,
} from '../../components';
// context
import { useAuth, useAdmin } from '../../context';
// img
import { Headshot } from '../../assets/img';

const settings = [
  {item: "Licensing Logos", key: 1, isChecked: true},
  {item: "Admin Members", key: 2, isChecked: true},
  {item: "HEX Codes", key: 3, isChecked: true},
];
    
type FormData = {
  email: string;
  subject: string;
  message: string;
  files?: File[];
};

export const AdminHome = () => {
  const [graduates, setGraduates] = useState<any>([]);

  const auth = useAuth();
  const admin = useAdmin();

  useEffect(() => {
    getGraduates()
  }, [graduates])

  const getGraduates = async () => {
    const graduates = await admin.getGraduatesList()
    setGraduates(graduates.data)
  }

  const {
    register,
    // handleSubmit,
    // formState: { errors },
    control,
    setValue,
    // trigger,
    // reset,
  } = useForm<FormData>({
    // resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: '',
      subject: '',
      message: '',
      files: undefined,
    },
  });
  const watch = useWatch({
    control,
  });

  return (
    <div className='adminHome'>
      <div>
        <span className='adminHome__userName'>
          {auth.userProfile?.user?.firstName + " " + auth.userProfile?.user?.lastName}
        </span>
        <span className='adminHome__userRole'>
          &nbsp;{"(Admin Owner)"} 
        </span>
      </div>
      <div className='adminHome__container'>
        <div className='adminHome__containerLeft'>
          <div className='generalPanel'>
            <div className='generalPanel__header'>
              <p className='generalPanel__title'>Upload Graduate List</p>
            </div>
            <UploadInput
              files={watch.files}
              setFiles={(files: any) => setValue('files', files)}       
              register={register('files')}
              title='Drag your file here (.csv)'
            />
            <p className='generalPanel__textLine'>or</p>
            <div className='generalPanel__buttonPanel'>
              <Button
                buttonType={'full'}
                color={'blue'}
                // onClick={() => setCurrentPlan(plan)}
                text={"Upload File"}
                className='generalPanel__button'
              />
            </div>
          </div>
          <div className='generalPanel'>
            <div className='generalPanel__header'>
              <p className='generalPanel__title'>Administrative Settings</p>
              <Button
                buttonType={'full'}
                color={'blue'}
                // onClick={() => setCurrentPlan(plan)}
                text={"See Details"}
                className='generalPanel__button'
              />
            </div>
            <div className="align-center">
              <img
                src={Headshot}
                className="listPanel__avatar"
                alt='Graduates List Avatar'
              />
              <p className='generalPanel__text ml24'>Purdue University</p>
            </div>
            <List spacing={3}>
              {
                settings.map((item, index) => {
                  return (
                    <ListItem key={index}>
                      <div className='wFull hFull mt16 space-beetwen'>
                        <span className='generalPanel__text'>{item.item}</span>
                        <Checkbox
                          checked={item.isChecked}
                          // onChange={(e) => {
                          //   setValue('agree', e.target.checked);
                          // }}
                        />
                      </div>
                    </ListItem>
                  )
                })
              }
            </List>
          </div>
        </div>
        <div className='adminHome__containerRight'>
          <AdminHomeGraduates graduates={graduates} />
        </div>
      </div>
    </div>
  );
};
