export default function SideParagraph({ title, children }) {
	return (
		<section className="p-1">
			<h2 className="font-bold text-3xl">{title}</h2>
			<hr />
			<div className="py-3">{children}</div>
		</section>
	);
}
