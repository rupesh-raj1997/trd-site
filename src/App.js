import logo from './logo.svg';
import './App.scss';

import Header from './components/Header';
import SidebarItem from './components/SidebarItem';
import SubSidebarItem from './components/SubSidebarItem';

const pages = [
	{
		name: 'DashBoard',
		alt: 'dashboard icon',
		src: './assets/dashboard.svg',
		isSelected: false

	},
	{
		name: 'Monthly Process',
		alt: 'monthly process icon',
		src: './assets/monthly.svg',
		isSelected: false
	},
	{
		name: 'Super Configura..',
		alt: 'super configure icon',
		src: './assets/superconf.svg',
		isSelected: true,

	},
	{
		name: 'Master Reports',
		alt: 'master reports icon',
		src: './assets/masterreports.svg',
		isSelected: false
	},
	{
		name: 'More',
		alt: 'more icon',
		src: './assets/read_more.svg',
		isSelected: false
	}
]

const subPages = [
	{
		name: 'Services Offered',
		isSelected: false,
	},
	{
		name: 'Org Setup',
		isSelected: true,
	}
];

const App = () => {
	return (
		<div className="pageWrapper">
			<Header></Header>
			<main className='main'>
				<div className='sidebar'>
					<div className='sticky'>
						{
							pages.map(page =>
								<SidebarItem {...page}>
								</SidebarItem>
							)
						}
					</div>
					<div className='collapse'>
						{
							subPages.map(page =>
								<SubSidebarItem {...page}>
								</SubSidebarItem>
							)
						}
					</div>
				</div>
				<div className='content'></div>
			</main>
		</div>
	)
}

export default App;
