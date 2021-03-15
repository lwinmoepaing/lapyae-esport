const { getPesWinnerList } = require('../../config/PES_LIST')
const { getUser, getUserById, getThrophyUser } = require('../../config/USER_LIST')
const { getBlogById, getBlogs } = require('../../config/BLOG_LIST')
const GAME_LIST = require('../../config/GAME_LIST')
const DEAULT_OG_IMAGE = process.env.BASE_URL + '/images/blogs/blog.png'

const SHOW_INDEX = async (req, res) => {
	const users = await getPesWinnerList() 

	const blog = await getBlogById('2020-12-26')

	res.render('home/index', {
		title: ' Lapyae E-Sport ',
		description: '',
		ogImage: DEAULT_OG_IMAGE,
		users,
		games: GAME_LIST,
		baseUrl: process.env.BASE_URL,
		blog
	});
};


exports.SHOW_INDEX = SHOW_INDEX;

const SHOW_USERS = async (req, res) => {
	const users = await getUser() 
	const ogImage = process.env.BASE_URL + '/images/profile/player_list.png'
	res.render('home/users', {
		title: 'Lapyae E-Sport: ကစားသမားစာရင်း ',
		description: 'လပြည့်ဆိုင် ကစားသမားများစာရင်း',
		ogImage,
		users,
		baseUrl: process.env.BASE_URL + '/players'
	});
};

exports.SHOW_USERS = SHOW_USERS;

const SHOW_BLOG_BY_ID = async (req, res) => {
	const blog = await getBlogById(req.params.blog_id) 
	const blogTitle = blog ? blog.blog_title : 'Lapyae E-Sport | content မတွေ့ရှိပါ။ '
	const description = blog ? blog.description : blogTitle
	const ogImage = blog ?  process.env.BASE_URL + blog.blog_image : DEAULT_OG_IMAGE
	const baseUrl =  process.env.BASE_URL + '/blog/'

	res.render('home/blog_detail', {
		title: blogTitle,
		description: description,
		ogImage: ogImage,
		blog: blog,
		url: baseUrl + (blog ? blog.blog_id : ''),
		baseUrl
	});
};

exports.SHOW_BLOG_BY_ID = SHOW_BLOG_BY_ID;

const SHOW_PLAYER_BY_ID = async (req, res) => {
	const users = await getUser() 
	const user = getUserById(req.params.player_id, users) 
	const ogImage = user ?  process.env.BASE_URL + user.profile_img : DEAULT_OG_IMAGE
	const title = user ? user.name : 'Lapyae E-Sport | Player မတွေ့ရှိပါ။ '
	const description = user ? user.about : title
	const baseUrl =  process.env.BASE_URL + '/players/'

	res.render('home/player_detail', {
		title,
		description,
		ogImage,
		user,
		url: baseUrl + (user ? user.id : ''),
		baseUrl
	});
};

exports.SHOW_PLAYER_BY_ID = SHOW_PLAYER_BY_ID;

const SHOW_ALL_BLOGS = async (req, res) => {
	const blogs = await getBlogs() 
	const blogData = await Promise.all(blogs.map(blogId => getBlogById(blogId) ))
	const ogImage =  process.env.BASE_URL + '/images/blogs/news.png'
	const title = 'Lapyae E-Sport | ပြိုင်ပွဲများအကြောင်း နှင့် နေ့စဉ်သတင်း'
	const description = 'ပြိုင်ပွဲများအကြောင်း နှင့် နေ့စဉ်သတင်း'
	const baseUrl =  process.env.BASE_URL + '/blog/'

	const params = {
		title,
		description,
		ogImage,
		url: baseUrl,
		baseUrl,
		blogs: blogData
	}
	res.render('home/blog_list', params);
};

exports.SHOW_ALL_BLOGS = SHOW_ALL_BLOGS;

const SHOW_ALL_THROPHY_PLAYERS = async (req, res) => {
	const pc_users = await getUser() 
	const pc_throphy_users = await getThrophyUser('pc') 
	const pc_throphy_users_data = await Promise.all(pc_throphy_users.map(user =>  ({
		...getUserById(user.id, pc_users),
		...user,
		total_throphy: addTotalThrophy(user.throphy)
	})))
	// Delete Keys 
	deleteKeysFromArray(pc_throphy_users_data, ['about', 'games'])

	const ogImage =  process.env.BASE_URL + '/images/profile/player_list.png'
	const title = 'Lapyae E-Sport | ဆုရရှိသူများ'
	const description = 'ဆုရရှိသူများ စာရင်း'
	const baseUrl =  process.env.BASE_URL + '/throphy_players/'

	const params = {
		ogImage,
		title,
		description,
		baseUrl,
		pc_users: pc_throphy_users_data
	}
	res.render('home/throphy_player_list', params);
};

exports.SHOW_ALL_THROPHY_PLAYERS = SHOW_ALL_THROPHY_PLAYERS;


/**
 * Helper
 */
const deleteKeysFromArray = (data = [], deletedKeys = []) => {
	data.forEach(element => {
		deletedKeys.forEach(key => {
			delete element[key]
		})
	});
}

const addTotalThrophy = (throphyObj = {}) => {
	return Object.keys(throphyObj)
	.map(key => {
		return throphyObj[key] 
	})
	.reduce((acc, cur) => acc + cur, 0)
}