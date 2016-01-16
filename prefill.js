import getTransactions from './transactions/get.js'
import addTransactions from './transactions/add.js'

const preFill = () => {
	getTransactions()
		.then(addTransactions)
		.catch(err => {
			console.log(err)
		})
}

export default preFill
