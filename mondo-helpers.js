import mondo from 'mondo-bank'

const auth = () => {
	const {env} = process
	const config = {
		client_id: env.MONDO_CLIENT_ID,
		client_secret: env.MONDO_CLIENT_SECRET,
		username: env.MONDO_USERNAME,
		password: env.MONDO_PASSWORD,
	}

	return new Promise((resolve, reject) => {
		mondo.token(config)
			.then(resolve)
			.catch(reject)
	})
}

const getTransactions = (id, token) => new Promise((resolve, reject) => {
	mondo.transactions(id, token)
		.then(({transactions}) => resolve(transactions))
		.catch(reject)
})

const getUserAccount = (token) => new Promise((resolve, reject) => {
	mondo.accounts(token)
		.then(user => {
			const {id} = user.accounts[0]
			resolve(id)
		})
		.catch(reject)
})

const authAndGetUserAccount = () => new Promise((resolve, reject) => {
	auth()
		.then(user => {
			const token = user.access_token
			getUserAccount(token)
				.then(id => resolve({id, token}))
				.catch(reject)
		})
		.catch(reject)
})

const authAndGetTransactions = () => new Promise((resolve, reject) => {
	authAndGetUserAccount()
		.then(({id, token}) => {
			getTransactions(id, token)
				.then(resolve)
				.catch(reject)
		})
		.catch(reject)
})


export {
	auth,
	getTransactions,
	getUserAccount,
	authAndGetUserAccount,
	authAndGetTransactions,
}

