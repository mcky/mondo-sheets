import loadenv from '../loadenv'
import {deleteDuplicateWebhooks} from '../webhooks.js'

deleteDuplicateWebhooks()
	.then(console.log)
	.catch(console.log)
