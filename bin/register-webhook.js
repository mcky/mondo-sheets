import loadenv from '../loadenv'
import {registerWebhook} from '../webhooks.js'

registerWebhook()
	.then(console.log)
	.catch(console.log)
