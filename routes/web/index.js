const router = require('express').Router()
const { SHOW_INDEX, SHOW_USERS, SHOW_PLAYER_BY_ID, SHOW_BLOG_BY_ID } = require('../../controllers/web')

router.get('/', SHOW_INDEX)

router.get('/players', SHOW_USERS)

router.get('/players/:player_id', SHOW_PLAYER_BY_ID)

router.get('/blog/:blog_id', SHOW_BLOG_BY_ID)

module.exports = app => {
	app.use('/', router)
}
