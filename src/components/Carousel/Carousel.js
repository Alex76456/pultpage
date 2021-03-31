import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.css';
import first from '../../images/micro_micro-se.jpg';
import second from '../../images/droplet.jpg';
import third from '../../images/PROFILESUBx2.jpg';

export default class extends React.Component {
	render() {
		return (
			<Carousel
				autoplay={true}
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
					<img className="slide_image" src={first} alt="колонки" />
					<p>FHGDRHREH</p>
				</div>
				<div className="slide">
					<img className="slide_image" src={second} alt="колонки" />
					<p>FHGDRHREH</p>
				</div>
				<div className="slide">
					<img className="slide_image" src={third} alt="колонки" />
					<p>FHGDRHREH</p>
				</div>
			</Carousel>
		);
	}
}
