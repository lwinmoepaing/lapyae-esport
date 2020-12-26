const router = require('express').Router()
const { SHOW_INDEX, SHOW_USERS } = require('../../controllers/web')

router.get('/', SHOW_INDEX)

router.get('/users', SHOW_USERS)

module.exports = app => {
	app.use('/', router)
}
