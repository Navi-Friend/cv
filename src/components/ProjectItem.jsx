export default function ProjectItem({ project }) {
	return (
		<div className="flex flex-col justify-start gap-5 border-2 rounded-md border-CVGray border-spacing-3 p-2.5 sm:w-4/5 mob:w-[90%]">
			<a
				className="flex justify-center items-center"
				href={project.link}
				target="_blank"
				rel="noreferrer"
			>
				<video
					autoPlay
					loop
					muted
					className="block max-w-full  w-auto border-none"
				>
					<source src={project.videoSrc} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</a>
			<div className="flex flex-col gap-4 justify-between h-full">
				<div>
					<h3 className="font-semibold text-2xl font-mono text-CVGray text-center mb-2">
						{project.title}
					</h3>
					<p>{project.description}</p>
				</div>
				<div className="flex gap-2 flex-wrap">
					{project.technologies.map((item, i) => (
						<div
							key={i}
							className="p-1 border-2 border-gray-600 rounded-md font-semibold shadow-gray-400 shadow-md text-CVGray"
						>
							{item}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
