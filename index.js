import dotenv from 'dotenv'
import preFill from './prefill.js'

if (process.env.NODE_ENV === 'development') {
	dotenv.load()
}

preFill()
