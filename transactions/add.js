import sheets from '../sheets.js'
import formatTransactions from './format.js'

const sleep = (duration) => {
	const now = new Date().getTime()
	while(new Date().getTime() < now + duration){}
}

const addTransactionsToSheet = (transactions) => {
	sheets.auth()
		.then(sheet => {
			transactions.forEach(transaction => {
				sheets.addRow(sheet, transaction)
				sleep(200)
			})
		})
		.catch(err => {
			console.log('err', err)
		})
}

const addTransactions = (transactions) => {
	const transactionArr = Array.isArray(transactions) ? transactions : [transactions]
	const formatted = formatTransactions(transactionArr)
	addTransactionsToSheet(formatted)
}

export default addTransactions
