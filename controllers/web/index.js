const SHOW_INDEX = (req, res) => {
	const users = [
		{
			state: '1',
			name: 'Lwin Moe Paing',
			team: 'LiverPool',
			team_img: 'path'
		},
		{
			state: '2',
			name: 'Thant Zin Phyo',
			team: 'LiverPool',
			team_img: 'path'
		},
		{
			state: '3',
			name: 'Nyi Nyi',
			team: 'Athetico Madriad',
			team_img: 'path'
		},
		{
			state: '4',
			name: 'Min Htet Kyaw Thu',
			team: 'Arsenal',
			team_img: 'path'
		},
		{
			state: '5',
			name: 'Aung Myo Kyaw',
			team: 'Juventus',
			team_img: 'path'
		}
	]
	res.render('home/index', {
		title: ' Lapyae-Lion E-Sport ',
		users
	})
}

exports.SHOW_INDEX = SHOW_INDEX
