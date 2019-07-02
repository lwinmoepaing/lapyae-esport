const SHOW_INDEX = (req, res) => {
	const users = [
		{
			state: '1',
			name: 'Lwin Moe Paing',
			team: 'LiverPool',
			team_img: '/images/team/liverpool.png',
			status: 'Champion'
		},
		{
			state: '2',
			name: 'Thant Zin Phyo',
			team: 'LiverPool',
			team_img: '/images/team/liverpool.png',
			status: '1st RunnerUp'
		},
		{
			state: '3',
			name: 'Nyi Nyi',
			team: 'Atletico Madrid',
			team_img: '/images/team/atletico_madrid.png',
			status: '2nd RunnerUp'
		},
		{
			state: '4',
			name: 'Min Htet Kyaw Thu',
			team: 'Arsenal',
			team_img: '/images/team/arsenal.png',
			status: '3rd RunnerUp'
		},
		{
			state: '5',
			name: 'Aung Myo Kyaw',
			team: 'Juventus',
			team_img: '/images/team/juventus.png',
			status: '4th RunnerUp'
		}
	]
	res.render('home/index', {
		title: ' Lapyae-Lion E-Sport ',
		users
	})
}

exports.SHOW_INDEX = SHOW_INDEX
