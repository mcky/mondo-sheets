import omit from 'lodash/omit'
import addTransactions from '../transactions/add.js'

const handleWebhook = (req, res) => {
	const transaction = req.body.data
	const omitted = omit(transaction, ['merchant', 'account_id'])

	const merchant = transaction.merchant.id

	const filteredTransaction = {
		...omitted,
		merchant,
	}

	addTransactions(filteredTransaction)

	res.sendStatus(200)
}

export default handleWebhook
