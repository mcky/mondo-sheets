import moment from 'moment'
import getSymbol from 'currency-symbol-map'

const formatAmount = function(amount, currency) {
	const symbol = getSymbol(currency)
	const toDecimal = (amount/100).toFixed(2)
	return symbol+toDecimal
}

const formatTranaction = (transaction) => {
	const {amount, currency, created, account_balance} = transaction

	const dateTime = moment(created).format('DD/MM/YYYY HH:mm:ss')
		, [date, time] = dateTime.split(' ')
		, formattedAmount = formatAmount(amount, currency)
		, balance = formatAmount(account_balance, currency)

	return {
		...transaction,
		created: dateTime,
		account_balance: balance,
		amount: formattedAmount,
		date,
		time,
	}
}

const formatTransactions = (transactions) => transactions.map(formatTranaction)

export {formatTranaction}
export default formatTransactions
