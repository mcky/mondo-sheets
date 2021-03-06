# mondo-sheets
Connect your [Mondo](http://getmondo.co.uk) to Google sheets.

Registers a webhook with mondo and posts your transactions to a spreadhseet.

![Example spreadhseet](https://raw.githubusercontent.com/mcky/mondo-sheets/master/screenshot.png)


## Usage
1. Create a google sheet with row headers matching the keys you want imported to the sheet. All keys sent from the webhook can be found in [the webhook documentation](https://getmondo.co.uk/docs/#transaction-created). (Only `merchant_id` from the merchant object is supported at the moment)
3. Get your OAuth credentials from Mondo
2. Follow the instructions in the [`google-spreadsheet`](https://github.com/theoephraim/node-google-spreadsheet#service-account-recommended-method) for setting up a service account for use with google sheets.

3. Set the environment variables below or in a `.env` file if testing locally. Run all commands prepended with `NODE_ENV=development` locally. 

  ```
  GOOGLE_CLIENT_EMAIL=
  GOOGLE_PRIVATE_KEY=
  GOOGLE_SHEET_KEY=
  
  MONDO_CLIENT_ID=
  MONDO_CLIENT_SECRET=
  MONDO_USERNAME=
  MONDO_PASSWORD=
  
  PORT=
  WEBHOOK_ORIGIN=*
  WEBHOOK_URL=
  
  ```
4. Run `npm install` to add dependencies
5. Run `npm run register-hook` to register a webhook with the `WEBHOOK_URL` you provided
6. Run `npm start` or `NODE_ENV=development npm start` locally
7. Run `npm run prefill` to prefill the spreadsheet with all your past transactions

## Scripts
`npm run start` - Start the server listening for webhooks  
`npm run prefill` - Fetch all past transactions and add them to the sheet (don't have the sheet tab open when you're using this!)
`npm run list-hooks` - List webhooks  
`npm run register-hook` - Register a webhook for this application  
`npm run dedupe-hooks` - Remove webhooks with duplicate URLs  

## Todo
- Get the current account balance when a webhook is fired

## Notes
The sheets API seems to silently fail if you try sending too many rows too fast. For now I've implimented a delay between adding rows.

I've removed `account_balance` for now as it appears on old transactions but not the webhook ones yet.

## Thanks
[Alex Robinson](https://github.com/solidgoldpig) for his great [`mondo-bank`](https://github.com/solidgoldpig/mondo-bank) API library

[Darian Moody](https://github.com/djm/) for his help with de-duping webhooks
