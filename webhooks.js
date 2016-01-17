import mondo from 'mondo-bank'
import {authAndGetUserAccount} from './mondo-helpers.js'

const listWebhooks = () => new Promise((resolve, reject) => {
	authAndGetUserAccount()
		.then(({id, token}) => {
			mondo.webhooks(id, token)
				.then(({webhooks}) => {
					console.log(webhooks)
				})
				.catch(reject)
		})
		.catch(reject)
})

const deleteDuplicateWebhooks = () => new Promise((resolve, reject) => {
})

const registerWebhook = () => new Promise((resolve, reject) => {
	authAndGetUserAccount()
		.then(({id, token}) => {
			const {WEBHOOK_URL} = process.env
			const url = `${WEBHOOK_URL}/webhook`

			mondo.registerWebhook(id, url, token)
				.then(resolve)
				.catch(reject)
		})
		.catch(reject)
})


export {
	listWebhooks,
	deleteDuplicateWebhooks,
	registerWebhook,
}
