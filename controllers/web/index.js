const SHOW_INDEX = (req, res) => {
	const users = [
		{
			state: '1',
			name: 'Lwin Moe Paing',
			team: 'LiverPool',
			team_img: '/images/team/liverpool.png',
			profile_img: '/images/profile/lwin_moe_paing.jpg',
			status: 'Champion'
		},
		{
			state: '2',
			name: 'Thant Zin Phyo',
			team: 'LiverPool',
			team_img: '/images/team/liverpool.png',
			profile_img: '/images/profile/thant_zin_phyo.jpg',
			status: '1st RunnerUp'
		},
		{
			state: '3',
			name: 'Nyi Nyi',
			team: 'Atletico Madrid',
			team_img: '/images/team/atletico_madrid.png',
			profile_img: '/images/profile/nyi_nyi.jpg',
			status: '2nd RunnerUp'
		},
		{
			state: '4',
			name: 'Min Htet Kyaw Thu',
			team: 'Arsenal',
			team_img: '/images/team/arsenal.png',
			profile_img: '/images/profile/min_htet_kyaw_thu.jpg',
			status: '3rd RunnerUp'
		},
		{
			state: '5',
			name: 'Aung Myo Kyaw',
			team: 'Juventus',
			team_img: '/images/team/juventus.png',
			profile_img: '/images/profile/aung_myo_kyaw.jpg',
			status: '4th RunnerUp'
		}
	];

	const games = [
		{
			color: 'primary',
			link: '#pes_table',
			link_title: 'View Result ',
			game_img: '/images/games/pes.png'
		},
		{
			color: 'info',
			link: '#!',
			link_title: 'Comming Soon',
			game_img: '/images/games/pubg.png'
		},
		{
			color: 'success',
			link: '#!',
			link_title: 'Comming Soon',
			game_img: '/images/games/dota-2.png'
		},
		{
			color: 'primary',
			link: '#!',
			link_title: 'Comming Soon',
			game_img: '/images/games/mobile_legends.png'
		}
	];

	res.render('home/index', {
		title: ' Lapyae-Lion E-Sport ',
		users,
		games
	});
};

exports.SHOW_INDEX = SHOW_INDEX;
