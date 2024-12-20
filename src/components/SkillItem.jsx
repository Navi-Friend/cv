export default function SkillItem({ skill }) {
	return (
		<div className="flex flex-col py-2">
			<label htmlFor={skill.title} className="text-md">
				{skill.title}
			</label>
			<div className="w-3/4 h-2 bg-slate-100 rounded-md">
				<div
					style={{ width: `${skill.progress}%` }}
					className={`bg-CVBlue h-2 rounded-md`}
				></div>
			</div>
		</div>
	);
}
