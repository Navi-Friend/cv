import ContactItem from './components/ContactItem';
import EducationItem from './components/EducationItem';
import SideParagraph from './components/SideSection';
import SkillItem from './components/SkillItem';
import TechnologyItem from './components/TechologyItem';

import purpleSchoolLogo from './assets/purpleSchoolLogo.png';
import BSULogo from './assets/BSULogo.png';
import ReactLogo from './assets/ReactLogo.png';
import ReduxLogo from './assets/ReduxLogo.png';
import TailwindLogo from './assets/TailwindLogo.png';
import { useState } from 'react';
import ViteLogo from './assets/ViteLogo.png';
import NodeJSLogo from './assets/NodeJSLogo.png';
import ExpressLogo from './assets/ExpressLogo.png';
import NestLogo from './assets/NestLogo.png';
import MongoLogo from './assets/MongoLogo.png';
import PostgresLogo from './assets/PostgresLogo.png';
import FastAPILogo from './assets/FastAPILogo.png';
import DjangoLogo from './assets/DjangoLogo.png';
import TimelineItem from './components/TimeLine';
import ProjectItem from './components/ProjectItem';

import SupperVideo from './assets/SupperVideo.mp4';
import LamodaVideo from './assets/LamodaVideo.mp4';
import TodoistVideo from './assets/TodoistVideo.mp4';
import NotionVideo from './assets/NotionVideo.mp4';
import FilterableListVideo from './assets/FilterableListVideo.mp4';
import APIVideo from './assets/APIVideo.mp4';

import Portrait from './assets/Portrait.jpg';

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
		imageSrc: ReactLogo,
		alt: 'React',
	},
	{
		imageSrc: ReduxLogo,
		alt: 'Redux',
		className: '',
	},
	{
		imageSrc: TailwindLogo,
		alt: 'Tailwind',
	},
	{
		imageSrc: ViteLogo,
		alt: 'Vite',
	},
	{
		imageSrc: NodeJSLogo,
		alt: 'Node JS',
	},
	{
		imageSrc: ExpressLogo,
		alt: 'Express',
	},
	{
		imageSrc: NestLogo,
		alt: 'Nest JS',
	},
	{
		imageSrc: MongoLogo,
		alt: 'Mongo DB',
	},
	{
		imageSrc: PostgresLogo,
		alt: 'PostgreSQL',
	},
	{
		imageSrc: FastAPILogo,
		alt: 'FastAPI',
	},
	{
		imageSrc: DjangoLogo,
		alt: 'Django',
	},
];
const WORK_INFO = [
	{
		year: '2021-2024',
		title: 'Self-employment',
		description:
			'I have developed and maintained web applications for various clients using modern technologies such as JavaScript, React, Node.js, Express, and Python. During this time, I has successfully completed several projects. Interacted with clients to identify requirements and provide solutions tailored to their needs. Was engaged in self-education, studying new technologies and development tools in order to keep abreast of the latest trends in programming.',
	},
	{
		year: '2023-2027',
		title: 'Studying at the Belarusian State University',
		description:
			'I have been studying at Belarusian State University, majoring in mathematics and computer science. During my studies at the university, I acquired a solid foundation in programming languages such as C++, Java, JavaScript, and C#. I also learned about modern web technologies and created websites with complex front-end and back-end systems. I delved deeply into advanced mathematics, which improved my analytical and problem-solving abilities. My coursework included algorithms, data structures, networking, and software development principles, enabling me to gain a comprehensive understanding of computer science concepts. This rigorous academic background equipped me with the skills required to tackle complex programming problems and contribute effectively to software development projects.',
	},
	{
		year: '2024',
		title: 'Commercial Project',
		description:
			'At the request of one of a Belarusian university, my team and I designed and developed the "Bench Of Love" website, which was successfully launched and is now operating in the city of Mogilev. For this project, I worked on the backend using Node.js, Express, MongoDB, and Mongoose. I created a registration and authentication system using JWT from scratch and developed an API for the entire website. I wrote API documentation and created a database schema. I also actively collaborated with the frontend team to ensure smooth communication and deployment of the project on a remote server.',
	},
];

const PROJECTS_INFO = [
	{
		videoSrc: NotionVideo,
		technologies: [
			'React',
			'Redux',
			'Zod',
			'TailwindCSS',
			'Vite',
			'Json-Server',
			'React Router',
		],
		title: 'Notion',
		description:
			'Notion web service, developped with React, Redux, TailwindCSS, Vite and Json-Server as a database. There is registration and authorization, supports of creating, changing and deleting of notes.',
		link: 'https://github.com/Navi-Friend/React-Notion-Redux',
	},
	{
		videoSrc: LamodaVideo,
		technologies: ['React', 'TailwindCSS', 'Vite'],
		title: 'Online store',
		description:
			'An online store like Lamoda written on React, TailwindCSS, Vite. The main concept of application is differentiation of fileters and catalog components for convenience and scalability. The main aim of development was to create the system, supporting easy adding and removing of filters.',
		link: 'https://github.com/Navi-Friend/lamoda',
	},
	{
		videoSrc: APIVideo,
		technologies: [
			'React',
			'React Router',
			'Vite',
			'TailwindCSS',
			'Json Placeholder',
		],
		title: 'API Service',
		description:
			'Web site, connected to Json Placeholder and giving the ability to get users, their albums and photos. Project supplies fetch handling and different loading to smooth out the server operations.',
		link: 'https://github.com/Navi-Friend/api-spa',
	},
	{
		videoSrc: SupperVideo,
		technologies: ['Pure JS', 'HTML', 'CSS', 'Live Server'],
		title: 'Supper Game',
		description:
			'A supper game with ability to increase a game field, number of bombs and other. It writter on pure JavaScript, using pattern of differentiation of logic and rendering parts.',
		link: 'https://github.com/Navi-Friend/supper.git',
	},
	{
		videoSrc: TodoistVideo,
		technologies: ['React', 'Zod', 'Vite', 'CSS modules'],
		title: 'Todoist',
		description:
			'The project of default Todo List, but with extra abilities. The site uses validation, fast rendering and minimal number of rerenders. You can choose different independent filters and sortings.',
		link: 'https://github.com/Navi-Friend/todoist',
	},
	{
		videoSrc: FilterableListVideo,
		technologies: ['TypeScript', 'HTML', 'CSS', 'Json Placeholder'],
		title: 'Filterable List',
		description:
			"Filterable List - is a project whose main purpose was reactive fetching of data from server. Site use validation of user's input and correct handling of specific symbols.",
		link: 'https://github.com/Navi-Friend/filterable-list',
	},
];

function App() {
	const [activeIndex, setActiveIndex] = useState(null);
	const handleImageClick = (index) => {
		console.log(index, activeIndex);
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<div className="flex min-h-screen font-lato mob:flex-col sm:flex-row">
			<div className="sm:w-2/5 min-w-[270px] bg-CVGray pl-5 py-4 text-white lg:w-full">
				<img src={Portrait} alt="profile photo" className='w-1/2 ml-1 mb-3'/>
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
					<h3 className="py-1">English B2</h3>
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
					Work Experience
				</h2>
				<div className="h-[2px] bg-CVGray my-2 "></div>
				<section>
					<div className="flex flex-col items-start">
						{WORK_INFO.map((item, index) => (
							<TimelineItem
								key={index}
								year={item.year}
								title={item.title}
								description={item.description}
							/>
						))}
					</div>
				</section>
				<h2 className="font-bold text-CVGray text-4xl mt-14">
					Projects
				</h2>
				<div className="h-[2px] bg-CVGray my-2 "></div>
				<section className="grid lg:grid-cols-2 gap-5 md:grid-cols-2 grid-cols-1 justify-items-center">
					{PROJECTS_INFO.map((project, i) => (
						<ProjectItem key={i} project={project}></ProjectItem>
					))}
				</section>

				<h2 className="font-bold text-CVGray text-4xl mt-14">
					Technologies
				</h2>
				<div className="h-[2px] bg-CVGray my-2 "></div>
				<section className="flex flex-wrap gap-3 pt-4">
					{TECHNOLOGIES_INFO.map((technology, i) => (
						<TechnologyItem
							key={i}
							technology={technology}
							isActive={activeIndex === i}
							onClick={() => handleImageClick(i)}
						></TechnologyItem>
					))}
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
			</div>
		</div>
	);
}

export default App;
