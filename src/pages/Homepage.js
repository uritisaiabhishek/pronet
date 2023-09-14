import React from "react";
import Layout from "../components/Layout/Layout";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import {
	Pagination,
	Autoplay,
	FreeMode,
	Scrollbar,
	Mousewheel,
} from "swiper/modules";

function Homepage() {
	return (
		<Layout>
			<Swiper
				className='heroslider'
				// direction={"vertical"}
				pagination={{ clickable: true }}
				modules={[Pagination, Autoplay]}
				slidesPerView={1}
				autoplay={{ delay: 2500 }}
				onSlideChange={(swiper) => console.log(swiper.realIndex + 1)}
				onSwiper={(swiper) => console.log(swiper.realIndex + 1)}
			>
				<SwiperSlide>
					<div className='slideCount'>01</div>
					<div className='pageContentcard'>
						<div className='box'></div>
						<h1>We are Pronet</h1>
						<p>A Design Studio, SaSS and Mobile Developers</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slideCount'>02</div>
					<div className='pageContentcard'>
						<div className='box'></div>
						<h1>Our Promise</h1>
						<p>The Key to our success </p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slideCount'>03</div>
					<div className='pageContentcard'>
						<div className='box'></div>
						<h1>Our Team</h1>
						<p>some content comes here</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</Layout>
	);
}

export default Homepage;
