import React, { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

//styles
import './styles.scss';
//constants
import { ROUTES, adminSidebarMenu } from '../../constants';
import { headerLogoImg } from '../../assets/img';
interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  items: any[];
}

export const SidebarMenu: FC<SidebarProps> = ({
  items,
}) => {

  return (
    <Sidebar className='sidebarMenu'>
      <Menu>
        <MenuItem className="sidebarMenu__header">
          <Link to={ROUTES.profileHome} className='align-center'>
            <img
              src={headerLogoImg}
              className='sidebarMenu__header__logo'
              alt='Logo'
            />
          </Link>
        </MenuItem>
        <MenuItem disabled></MenuItem>
        {adminSidebarMenu.map((item, index) => {
          return (
            <MenuItem className='sidebarMenu__item' key={index}>
              <Link 
                className='sidebarMenu__item__link align-center'
                to={item.url}
              >
                <img
                  src={item.icon}
                  className='sidebarMenu__icon'
                  alt='sidebar-icon'
                />
                <span className='sidebarMenu__item__text'>&nbsp;&nbsp;{item.name}</span>
              </Link>
            </MenuItem>
          )
        })}
      </Menu>
    </Sidebar>
  );
};
