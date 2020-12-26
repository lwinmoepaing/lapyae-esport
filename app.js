const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const golb = require('glob')
const ejsLocals = require('ejs-locals')
require('dotenv').config()

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// Parse application/json
app.use(bodyParser.json())
// Set cors
app.use(cors())
// Set the view engine to ejs
app.engine('ejs', ejsLocals)
// app.set('views', __dirname + '/templates')
app.set('view engine', 'ejs')

/**
 * Set Static Public Page
 */
app.use(
	express.static(
		path.resolve('./public'),
		{
			// maxAge: '2hr'
		}
	)
)

/**
 * All Web Routers
 */
const webRoutes = golb.sync('./routes/web/*.js')
webRoutes.forEach((route, i) => {
	require(route)(app)
})

/**
 * All Api Routers
 */
// const apiRoutes = golb.sync('./routes/api/*.js')
// apiRoutes.forEach((route, i) => {
// 	require(route)(app)
// })

app.all('*', (req, res) => {
	res.status(200).json({
		error: '404 not found'
	})
})

module.exports = app
