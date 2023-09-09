import React, { useState } from "react";

function Accordion({ items }) {
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
		console.log(index + "open accordian");
	};

	const renderedItems = items.map((item, index) => {
		const isActive = index === activeIndex;
		const className = isActive ? "active" : "";

		return (
			<div key={index} className='accordian'>
				<div
					className={`accodian_title ${className}`}
					onClick={() => onTitleClick(index)}
				>
					{item.title}
				</div>
				<div
					dangerouslySetInnerHTML={{ __html: item.content }}
					className={`accodian_content ${className}`}
				/>
			</div>
		);
	});

	return <div className='accordion'>{renderedItems}</div>;
}

export default Accordion;
