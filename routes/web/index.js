const router = require('express').Router()
const { SHOW_INDEX } = require('../../controllers/web')

router.get('/', SHOW_INDEX)

module.exports = app => {
	app.use('/', router)
}
