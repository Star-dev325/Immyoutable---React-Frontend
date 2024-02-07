import React, { FC, HTMLAttributes } from 'react';
import { Modal } from 'react-responsive-modal';
import cn from 'classnames';

//styles
import 'react-responsive-modal/styles.css';
import './styles.scss';
//assets
import { closeIcon } from '../../../../assets/icons';
//components
import { ResponsiveTable } from '../../../ResponsiveTable'

interface AdminGraduateModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  handleClose?: () => void;
  modalClassName?: string;
  graduates: any[];
}

const columns = [
  {
    key: 'universityName',
    value: 'University Name'
  },
  {
    key: 'eduEmail',
    value: 'EDU Email'
  },
  {
    key: 'fn',
    value: 'First Name'
  },
  {
    key: 'mn',
    value: 'Middle Name'
  },
  {
    key: 'sn',
    value: 'Last Name'
  },
  {
    key: 'issueDate',
    value: 'Issue Date'
  },
  {
    key: 'isAlumni',
    value: 'Is Alumni?'
  },
  {
    key: 'honor',
    value: 'Academic Honors'
  }
]

export const AdminHomeGraduateModal: FC<AdminGraduateModalProps> = ({
  open = false,
  handleClose = () => {},
  graduates,
  modalClassName,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeOnOverlayClick={true}
      center
      classNames={{
        overlay: 'adminGraduateModal__overlay',
        modalContainer: 'adminGraduateModal__modalContainer',
        modal: cn('adminGraduateModal__modal', modalClassName),
        closeButton: 'adminGraduateModal__closeButton',
      }}
      closeIcon={<img src={closeIcon} alt='Close' />}
    >
      <span>Please follow this format when uploading .csv files of students. If additional help is needed, please contact our support team support@immyoutable.com.</span>
      <ResponsiveTable columns={columns} data={graduates}/>
    </Modal>
  );
};
