import loadenv from '../loadenv'
import {authAndGetTransactions} from '../mondo-helpers.js'
import addTransactions from '../transactions/add.js'

authAndGetTransactions()
	.then(addTransactions)
	.catch(console.log)
