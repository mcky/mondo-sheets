import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import handleWebhook from './webhook.js'

const init = () => {

	const app = express()
	const {PORT, WEBHOOK_ORIGIN} = process.env

	app.server = http.createServer(app)
	app.use(bodyParser.json())

	app.use(function(req, res, next) {
	  res.header('Access-Control-Allow-Origin', WEBHOOK_ORIGIN)
	  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	  next()
	})

	app.post('/webhook', handleWebhook)

	app.server.listen(PORT || 5500)

	return app

}

export default init
