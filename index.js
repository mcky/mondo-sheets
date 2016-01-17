import dotenv from 'dotenv'
import preFill from './prefill.js'
import app from './server'

if (process.env.NODE_ENV === 'development') {
	dotenv.load()
}

app()
