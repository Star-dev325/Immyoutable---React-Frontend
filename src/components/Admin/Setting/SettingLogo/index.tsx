import React, { FC, HTMLAttributes } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

//styles
import './styles.scss';
import 'swiper/css';
import 'swiper/css/pagination';
//components
import { Button } from '../../../../components';
//img
import { CompanyLogo1, CompanyLogo2, CompanyLogo3, CompanyLogo4 } from '../../../../assets/img';

interface AdminSettingLogoProps extends HTMLAttributes<HTMLDivElement> {}

export const AdminSettingLogo: FC<AdminSettingLogoProps> = () => {

  return (
    <div className='generalPanel'>
      <div className='generalPanel__header'>
        <p className='generalPanel__title'>My Logos</p>
        <Button
          buttonType={'full'}
          color={'blue'}
          // onClick={() => setCurrentPlan(plan)}
          text={"Edit"}
          className='generalPanel__button'
        />
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={CompanyLogo1}
            className="companyLogo"
            alt='logo'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={CompanyLogo2}
            className="companyLogo"
            alt='logo'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={CompanyLogo3}
            className="companyLogo"
            alt='logo'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={CompanyLogo4}
            className="companyLogo"
            alt='logo'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
