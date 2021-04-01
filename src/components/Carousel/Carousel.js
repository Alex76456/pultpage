import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.css';
import first from '../../images/micro_micro-se.jpg';
import second from '../../images/droplet.jpg';
import third from '../../images/PROFILESUBx2.jpg';

import micro from '../../assets/menu/micro(1).jpg';
import microse from '../../assets/menu/micro-se.jpg';
import microdroplet from '../../assets/menu/micro-droplet.jpg';
import strada from '../../assets/menu/strada-2.jpg';

export default class extends React.Component {
	render() {
		return (
			<div>
				<Carousel
					autoplay={true}
					wrapAround={true}
					renderTopCenterControls={({ currentSlide }) => (
						<div className="button">Slide: {currentSlide}</div>
					)}
					renderCenterLeftControls={({ previousSlide }) => (
						<button className="button" onClick={previousSlide}>
							Previous
						</button>
					)}
					renderCenterRightControls={({ nextSlide }) => (
						<button className="button" onClick={nextSlide}>
							Next
						</button>
					)}
				>
					<div className="slide">
						<img className="slide__image" src={first} alt="колонки" />
						<h1 className="slider__text">
							<span className="slider__span-accent_color_blue">побалуй</span> себя
							выбором
						</h1>
						<div className="slide__container">
							<h2 className="slide__title">micro и micro se</h2>
							<p className="slide__subtitle">спутниковые колонки</p>
						</div>
					</div>
					<div className="slide">
						<img className="slide__image" src={second} alt="колонки" />
						<h1 className="slider__text">
							<span className="slider__span-accent_color_white">давай</span> зажжем
						</h1>
						<div className="slide__container">
							<h2 className="slide__title">droplet</h2>
							<p className="slide__subtitle">подвесная акустика</p>
						</div>
					</div>
					<div className="slide">
						<img className="slide__image" src={third} alt="колонки" />
						<h1 className="slider__text">
							<span className="slider__span-accent_color_blue">держатся</span> в тени
						</h1>
						<div className="slide__container">
							<h2 className="slide__title">profilesub</h2>
							<p className="slide__subtitle">сабвуфер</p>
						</div>
					</div>
				</Carousel>
				<Carousel
					autoplay={true}
					wrapAround={true}
					renderTopCenterControls={({ currentSlide }) => (
						<div className="button">Slide: {currentSlide}</div>
					)}
					renderCenterLeftControls={({ previousSlide }) => (
						<button className="button" onClick={previousSlide}>
							Previous
						</button>
					)}
					renderCenterRightControls={({ nextSlide }) => (
						<button className="button" onClick={nextSlide}>
							Next
						</button>
					)}
				>
					<div className="slide">
						<img className="slide__image" src={micro} alt="колонки" />
						<p className="slider__text-discount">
							скидки до<span className="slider__text-discount-b">30%</span>
						</p>
						<div className="slide__container">
							<h2 className="slide__title">micro</h2>
						</div>
					</div>
					<div className="slide">
						<img className="slide__image" src={microse} alt="колонки" />
						<p className="slider__text-discount">
							скидки до<span className="slider__text-discount-b">30%</span>
						</p>
						<div className="slide__container">
							<h2 className="slide__title">micro se</h2>
						</div>
					</div>
					<div className="slide">
						<img className="slide__image" src={microdroplet} alt="колонки" />
						<p className="slider__text-discount">
							скидки до<span className="slider__text-discount-b">30%</span>
						</p>
						<div className="slide__container">
							<h2 className="slide__title">micro droplet</h2>
						</div>
					</div>
					<div className="slide">
						<img className="slide__image" src={microdroplet} alt="колонки" />
						<p className="slider__text-discount">
							скидки до<span className="slider__text-discount-b">30%</span>
						</p>
						<div className="slide__container">
							<h2 className="slide__title">micro se droplet</h2>
						</div>
					</div>
					<div className="slide">
						<img className="slide__image" src={microdroplet} alt="колонки" />
						<p className="slider__text-discount">
							скидки до<span className="slider__text-discount-b">30%</span>
						</p>
						<div className="slide__container">
							<h2 className="slide__title">adiva droplet</h2>
						</div>
					</div>
					<div className="slide">
						<img className="slide__image" src={microdroplet} alt="колонки" />
						<p className="slider__text-discount">
							скидки до<span className="slider__text-discount-b">30%</span>
						</p>
						<div className="slide__container">
							<h2 className="slide__title">adiva se droplet</h2>
						</div>
					</div>
					<div className="slide">
						<img className="slide__image" src={micro} alt="колонки" />
						<p className="slider__text-discount">
							скидки до<span className="slider__text-discount-b">30%</span>
						</p>
						<div className="slide__container">
							<h2 className="slide__title">adiva</h2>
						</div>
					</div>
					<div className="slide">
						<img className="slide__image" src={micro} alt="колонки" />
						<p className="slider__text-discount">
							скидки до<span className="slider__text-discount-b">30%</span>
						</p>
						<div className="slide__container">
							<h2 className="slide__title">adiva se</h2>
						</div>
					</div>

					<div className="slide">
						<img className="slide__image" src={strada} alt="колонки" />
						<p className="slider__text-discount slider__text-discount_pos_right">
							скидки до<span className="slider__text-discount-b">30%</span>
						</p>
						<div className="slide__container">
							<h2 className="slide__title">strada 2</h2>
						</div>
					</div>
					<div className="slide">
						<img className="slide__image" src={third} alt="сабвуфер" />
						<p className="slider__text-discount">
							скидки до<span className="slider__text-discount-b">30%</span>
						</p>
						<div className="slide__container">
							<h2 className="slide__title">subwoofers</h2>
						</div>
					</div>
				</Carousel>
			</div>
		);
	}
}
