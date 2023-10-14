import React from "react";
import linkedin from "../../assets/images/LinkedIn.svg";
import facebook from "../../assets/images/Meta.svg";
import dribble from "../../assets/images/Dribbble.svg";
import behance from "../../assets/images/Behance.svg";

function Footer() {
	return (
		<footer>
			<ul className='social_media_list'>
				<li className='social_media_list__item'>
					<a
						href={process.env.REACT_APP_LINKEDIN}
						target='_blank'
						rel='noreferrer'
					>
						<img src={linkedin} alt='linkedin link' />
					</a>
				</li>
				<li className='social_media_list__item'>
					<a
						href={process.env.REACT_APP_FACEBOOK}
						target='_blank'
						rel='noreferrer'
					>
						<img src={facebook} alt='facebook link' />
					</a>
				</li>
				<li className='social_media_list__item'>
					<a
						href={process.env.REACT_APP_BEANCE}
						target='_blank'
						rel='noreferrer'
					>
						<img src={behance} alt='behance link' />
					</a>
				</li>
				<li className='social_media_list__item'>
					<a
						href={process.env.REACT_APP_DRIBBLE}
						target='_blank'
						rel='noreferrer'
					>
						<img src={dribble} alt='dribble link' />
					</a>
				</li>
			</ul>
			&copy; 2023 by PRONET. All Rights Reserved
		</footer>
	);
}

export default Footer;
