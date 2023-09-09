import React from "react";
import linkedin from "../../assets/images/LinkedIn.svg";
import facebook from "../../assets/images/Meta.svg";
import dribble from "../../assets/images/Dribbble.svg";
import behance from "../../assets/images/Behance.svg";

function Footer() {
	return (
		<footer style={{ display: "none" }}>
			<ul className='social_media_list'>
				<li className='social_media_list__item'>
					<a href='www.linkedin.com'>
						<img src={linkedin} alt='linkedin link' />
					</a>
				</li>
				<li className='social_media_list__item'>
					<a href='www.facebook.com'>
						<img src={facebook} alt='linkedin link' />
					</a>
				</li>
				<li className='social_media_list__item'>
					<a href='www.behance.com'>
						<img src={behance} alt='linkedin link' />
					</a>
				</li>
				<li className='social_media_list__item'>
					<a href='www.dribble.com'>
						<img src={dribble} alt='linkedin link' />
					</a>
				</li>
			</ul>
			&copy; 2023 by PRONET. All Rights Reserved
		</footer>
	);
}

export default Footer;
