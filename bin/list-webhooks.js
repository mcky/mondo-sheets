import loadenv from '../loadenv'
import {listWebhooks} from '../webhooks.js'

listWebhooks()
	.then(console.log)
	.catch(console.log)
