const {getPesWinnerList} = require('../../config/PES_LIST')
const {getUser} = require('../../config/USER_LIST')
const GAME_LIST = require('../../config/GAME_LIST')

const SHOW_INDEX = async (req, res) => {
	const users = await getPesWinnerList() 

	res.render('home/index', {
		title: ' Lapyae E-Sport ',
		description: '',
		ogImage: process.env.BASE_URL + '/images/blogs/blog.png',
		users,
		games: GAME_LIST,
		baseUrl: process.env.BASE_URL
	});
};


exports.SHOW_INDEX = SHOW_INDEX;

const SHOW_USERS = async (req, res) => {
	const users = await getUser() 

	res.render('home/users', {
		title: 'Lapyae E-Sport: ကစားသမားစာရင်း ',
		description: 'လပြည့်ဆိုင် ကစားသမားများစာရင်း',
		ogImage: process.env.BASE_URL + '/images/blogs/blog.png',
		users,
		baseUrl: process.env.BASE_URL + '/users'
	});
};

exports.SHOW_USERS = SHOW_USERS;