import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './LogoSlider.scss';

import canon from '../../assets/canon.png';
import pantum from '../../assets/pantum.png';
import kyocera from '../../assets/kyocera.png';
import samsung from '../../assets/samsung.png';
import hp from '../../assets/hp.png';
import xerox from '../../assets/xerox.png';
import brother from '../../assets/epson.png';

const logos = [pantum, canon, kyocera, samsung, hp, xerox, brother];

const LogoSlider = () => {
	return (
		<div className='logo-slider-wrapper'>
			<Swiper
				modules={[Autoplay, Pagination]}
				loop={true}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				spaceBetween={20}
				breakpoints={{
					320: { slidesPerView: 2 },
					480: { slidesPerView: 4 },
					768: { slidesPerView: 4 },
					1024: { slidesPerView: 5 },
				}}
			>
				{logos.map((logo, index) => (
					<SwiperSlide key={index}>
						<img src={logo} alt={`Logo ${index}`} className='logo-img' />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default LogoSlider;
