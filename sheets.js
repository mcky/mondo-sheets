import GoogleSpreadsheet from 'google-spreadsheet'

const checkEnv = () => new Promise((resolve, reject) => {
	 try {
 		const {GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_KEY} = process.env
 		const GOOGLE = {
 			client_email: GOOGLE_CLIENT_EMAIL,
			private_key: GOOGLE_PRIVATE_KEY,
			sheet_key: GOOGLE_SHEET_KEY,
 		}
 		resolve(GOOGLE)
 	} catch(err) {
 		reject(err)
 	}
 })

const newSheet = (key) => new Promise((resolve, reject) => {
	try {
		const sheet = new GoogleSpreadsheet(key)
		resolve(sheet)
	} catch(err) {
		reject(err)
	}
})

const authSheet = (sheet, creds) => new Promise((resolve, reject) => {
	sheet.useServiceAccountAuth(creds, function(err) {
		if (err) {
			reject(err)
		} else {
			resolve(sheet)
		}
	})
})


const auth = () => new Promise(function (resolve, reject) {
	checkEnv()
		.then(googleCreds => {
			newSheet(googleCreds.sheet_key)
				.then(function(sheet) {
					authSheet(sheet, googleCreds)
						.then(resolve)
						.catch(reject)
				})
				.catch(reject)
		})
		.catch(reject)
})

const addRow = (sheet, data) => {
	sheet.addRow(1, data)
}

const sheets = {
	auth,
	addRow,
}


export default sheets
