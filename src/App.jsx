import ContactItem from './components/ContactItem';
import EducationItem from './components/EducationItem';
import SideParagraph from './components/SideSection';
import SkillItem from './components/SkillItem';

import purpleSchoolLogo from './assets/purpleSchoolLogo.png';
import BSULogo from './assets/BSULogo.png';
const CONTACT_INFO = [
	{
		title: 'Email',
		element: (
			<a href="mailto:konoovalovivan2005@gmail.com">
				konovalovivan2005@gmail.com
			</a>
		),
	},
	{
		title: 'Address',
		element: <span>Minsk, Belarus</span>,
	},
	{
		title: 'GitHub',
		element: (
			<a href="https://github.com/Navi-Friend">
				<svg
					height="32"
					aria-hidden="true"
					viewBox="0 0 24 24"
					version="1.1"
					width="32"
					data-view-component="true"
					className="octicon octicon-mark-github v-align-middle"
				>
					<path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
				</svg>
			</a>
		),
	},
];

const EXPERTISE_INFO = [
	{
		title: 'NodeJS',
		progress: 50,
	},
	{
		title: 'NestJS',
		progress: 20,
	},
	{
		title: 'React',
		progress: 80,
	},
	{
		title: 'Python',
		progress: 45,
	},
	{
		title: 'Mathematics',
		progress: 74,
	},
];

const EDUCATOIN_INFO = [
	{
		imageSrc: BSULogo,
		imageClassName: '',
		title: 'Belarusian State University',
		description:
			'I have been studying in BSU from 2023 at Mechanics and Mathematics Faculty',
	},
	{
		imageSrc: purpleSchoolLogo,
		imageClassName: '',
		title: 'Purple school NodeJS course',
		description:
			'Advanced NodeJS course from Anton Larychev. The course covers such topics as structure of NodeJs, V8, work with threads, archetecture patterns and so on.',
	},
	{
		imageSrc: purpleSchoolLogo,
		imageClassName: '',
		title: 'Purple school NestJS course',
		description:
			'Advanced NestJS course from Anton Larychev. The course covers such topics as validation, testing, authorization, work with DBs and so on.',
	},
];

const TECHNOLOGIES_INFO = [
	{
		imageSrc: '',
		alt: '',
	},
];

function App() {
	return (
		<div className="flex min-h-screen font-lato">
			<div className="w-1/3 min-w-[270px] bg-CVGray pl-5 py-4 text-white">
				<img src="" alt="profile photo" />
				<SideParagraph title={'Contact'}>
					{CONTACT_INFO.map((contact, i) => (
						<ContactItem key={i} contact={contact}></ContactItem>
					))}
				</SideParagraph>
				<SideParagraph title={'Skills'}>
					{EXPERTISE_INFO.sort((a, b) => b.progress - a.progress).map(
						(skill, i) => (
							<SkillItem key={i} skill={skill}></SkillItem>
						),
					)}
				</SideParagraph>
				<SideParagraph title={'Languages'}>
					<h3 className="py-1">English B1</h3>
					<h3 className="py-1">Russian Native</h3>
				</SideParagraph>
			</div>
			<div className="py-10 pl-8 pr-4">
				<section>
					<h1 className="text-5xl font-bold text-CVGray -ml-1">
						Konovalov Ivan
					</h1>
					<h2 className="text-xl pt-1 tracking-widest">
						Web Developer
					</h2>
					<p className="mt-4 font-mono">
						I have been working in IT for more than 2 years. I have
						many experiences working individually and as a team
						member. My principles in working are responsibility and
						quality, because the key to team success is quality work
						completed on time. My goal is to continue learning new
						things and exploring new horizonts by doing interesting
						and challenging tasks.
					</p>
				</section>
				<h2 className="font-bold text-CVGray text-4xl mt-14">
					Education
				</h2>
				<div className="h-[2px] bg-CVGray my-2 "></div>
				<section className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1">
					{EDUCATOIN_INFO.map((educatoin, i) => (
						<EducationItem
							key={i}
							education={educatoin}
						></EducationItem>
					))}
				</section>
				<h2 className="font-bold text-CVGray text-4xl mt-14">
					Technologies
				</h2>
				<div className="h-[2px] bg-CVGray my-2 "></div>
				<section className="flex flex-wrap flex-col">
					{TECHNOLOGIES_INFO.map((technology, i) => (
						<img
							key={i}
							src={technology.imageSrc}
							alt={technology.alt}
						/>
					))}
				</section>
			</div>
		</div>
	);
}

export default App;
