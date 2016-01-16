# mondo-sheets
Connect your [Mondo](http://getmondo.co.uk) to Google sheets.

Google sheets currently fails silently at prefilling ~30 transactions. Working on a fix.


## Usage
1. Run `npm install` to add dependencies
2. Follow the instructions in the [`google-spreadsheet`](https://github.com/theoephraim/node-google-spreadsheet#service-account-recommended-method) for setting up a service account for use with google sheets.

3. Create a `.env` file with the following variables set:
  ```
  GOOGLE_CLIENT_EMAIL=
  GOOGLE_PRIVATE_KEY=
  GOOGLE_SHEET_KEY=
  
  MONDO_CLIENT_ID=
  MONDO_CLIENT_SECRET=
  MONDO_USERNAME=
  MONDO_PASSWORD=
  ```
4. Run `npm start`
