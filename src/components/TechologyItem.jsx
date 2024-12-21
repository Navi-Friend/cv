export default function TechnologyItem({ technology, onClick, isActive }) {
	return (
		<div className="w-14 h-14 relative cursor-pointer" onClick={onClick}>
			<img
				src={technology.imageSrc}
				alt={technology.alt}
				title={technology.alt}
				className={technology.className}
			/>
			{isActive && (
				<div className="absolute -top-3 bg-gray-800 text-white p-[3px] left-11 opacity-90 rounded-md z-10">
					{technology.alt}
				</div>
			)}
		</div>
	);
}
