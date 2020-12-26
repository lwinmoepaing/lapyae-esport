const router = require('express').Router()
const { SHOW_INDEX, SHOW_USERS, SHOW_BLOG_BY_ID } = require('../../controllers/web')

router.get('/', SHOW_INDEX)

router.get('/users', SHOW_USERS)

router.get('/blog/:blog_id', SHOW_BLOG_BY_ID)

module.exports = app => {
	app.use('/', router)
}
