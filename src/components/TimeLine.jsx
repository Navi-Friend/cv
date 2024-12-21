const TimelineItem = ({ year, title, description }) => {
	return (
		<div className="flex items-center relative">
			<div
				className="absolute left-[7px] top-0 w-[3px] h-full bg-slate-700"
				style={{ zIndex: -1 }}
			></div>
			<div className="w-4 h-4 bg-slate-700 rounded-full flex items-center justify-center absolute">
				<div className="w-2 h-2 bg-white rounded-full"></div>
			</div>
			<div className="ml-4 relative left-3 mb-12">
				<h3 className="text-md font-mono  text-gray-500">{year}</h3>
				<h4 className="text-2xl font-bold text-gray-800">{title}</h4>
				<p className="text-CVGray">{description}</p>
			</div>
		</div>
	);
};

export default TimelineItem;
