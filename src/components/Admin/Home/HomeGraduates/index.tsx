import React, { FC, HTMLAttributes, useState } from 'react';

import {
  List,
  ListItem,
} from '@chakra-ui/react';

//styles
import 'react-responsive-modal/styles.css';
import './styles.scss';
//components
import { Button, AdminHomeGraduateModal } from '../../../../components';

interface AdminHomeGraduatesProps extends HTMLAttributes<HTMLDivElement> {
  graduates: object[];
}

export const AdminHomeGraduates: FC<AdminHomeGraduatesProps> = ({
  graduates,
}) => {
  const [openModalState, setOpenModalState] = useState<boolean>(false);

  const openModal = () => {
    setOpenModalState(true)
  }

  const closeModal = () => {
    setOpenModalState(false)
  }

  return (
    <div className='generalPanel hFull'>
      <div className='generalPanel__header'>
        <p className='generalPanel__title'>My Graduates</p>
        <Button
          buttonType={'full'}
          color={'blue'}
          onClick={() => openModal()}
          text={"See Details"}
          className='generalPanel__button'
        />
      </div>
      <div className='listPanel small-grid'>
        <List spacing={3}>
          {
            graduates.map((item: any, index) => {
              return (
                <ListItem className='listPanel__item' key={index}>
                  <div className='listPanel__img'>
                    <img
                      src={item.avatar}
                      className="listPanel__avatar"
                      alt='Graduates List Avatar'
                    />
                  </div>
                  <div className='flexColumn'>
                    <span className='listPanel__mainTitle'>{item.fn + " " + item.sn}</span>
                    <span className='listPanel__smallTitle'>Class of {item.year}</span>
                  </div>
                  <span className='listPanel__normalTitle'>{item.major}</span>
                  <Button
                    buttonType={'full'}
                    color={'grey'}
                    // onClick={() => setCurrentPlan(plan)}
                    text={item.isAlumni ? "Alumni" : "Student"}
                    className='listPanel__button'
                  />
                  <span className='listPanel__smallTitle'>{item.hour}h ago</span>
                </ListItem>
              )
            })
          }
        </List>
      </div>
      <AdminHomeGraduateModal
        open={openModalState}
        handleClose={closeModal}
        graduates={graduates}
      />
    </div>
  );
};
