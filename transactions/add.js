import sheets from '../sheets.js'
import formatTransactions from './format.js'

const addTransactionsToSheet = (transactions) => {
	sheets.auth()
		.then(sheet => {
			transactions.forEach(transaction => {
				sheets.addRow(sheet, transaction)
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
