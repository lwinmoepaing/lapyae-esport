const router = require('express').Router()
const { SHOW_INDEX, SHOW_USERS, SHOW_PLAYER_BY_ID, SHOW_BLOG_BY_ID, SHOW_ALL_BLOGS, SHOW_ALL_THROPHY_PLAYERS } = require('../../controllers/web')

router.get('/', SHOW_INDEX)

router.get('/players', SHOW_USERS)

router.get('/players/:player_id', SHOW_PLAYER_BY_ID)

router.get('/blog', SHOW_ALL_BLOGS)

router.get('/blog/:blog_id', SHOW_BLOG_BY_ID)

router.get('/throphy_players', SHOW_ALL_THROPHY_PLAYERS)

router.get('/priority', (req, res) => {
	res.redirect('/blog');
})

module.exports = app => {
	app.use('/', router)
}
