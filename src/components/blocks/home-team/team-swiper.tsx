// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import clsx from 'clsx';

import styles from './team-swiper.module.scss';
import TeamCard from './team-card';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';
export default function TeamSwiper() {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation]}
      slidesPerView="auto"
      navigation={{
        prevEl: '#swiper-button-prev',
        nextEl: '#swiper-button-next',
      }}
    >
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="riiix" position="COO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="darlin" position="HRD" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard
          name="Instamarko"
          position="CEO"
          avatar="/img/team/sirius.png"
        />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <TeamCard name="SIRIUS" position="CEO" avatar="/img/team/sirius.png" />
      </SwiperSlide>
      <div slot="container-end" className={styles.controls}>
        <button
          id="swiper-button-next"
          className={clsx(styles['button-nav'], styles['button-next'])}
        >
          <ArrowRight />
        </button>
        <button
          id="swiper-button-prev"
          className={clsx(styles['button-nav'], styles['button-prev'])}
        >
          <ArrowLeft />
        </button>
      </div>
    </Swiper>
  );
}
