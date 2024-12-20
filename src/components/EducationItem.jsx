export default function EducationItem({ education }) {
	return (
		<div className="flex items-center p-2 border-2 border-zinc-400 bg-gray-200 rounded-md">
			<img
				src={education.imageSrc}
				alt={education.title}
				className={education.imageClassName + 'h-16'}
			/>
			<div className="pl-4">
				<h3 className="text-xl font-semibold text-gray-900 leading-6 mb-1">
					{education.title}
				</h3>
				<p>{education.description}</p>
			</div>
		</div>
	);
}
