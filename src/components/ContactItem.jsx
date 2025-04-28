export default function ContactItem({ contact }) {
	return (
		<div className="py-3 w-fit flex flex-col">
			<h3 className="font-semibold text-lg">{contact.title}</h3>
			{contact.element}
		</div>
	);
}
