# okta-auth-app
Simple App Using Okta for Token Authentication in Node + Express. This app is Express-based Node app that uses OKTA identity access management provider to secure authentication token. 

## Get Started
To get started, head over to https://developer.okta.com/ and create an account, or log in if you’ve already signed up. It’s free for developers.

Follow the steps below to create an application in Okta. Once you’ve done this, I’ll walk you through building the Node app and plugging in the Okta application to manage your user credentials and token authentication.

- Once you’re in the Okta dashboard, you will see an Org URL value on the top right of your screen. Save this value somewhere for later use, then click Application on the navigation menu
- Click Add Application
- Select Web, then click Next
- Enter the following settings then click Done
- You will be redirected to the General Settings page. Click Edit, then select the checkbox for Client Credentials (make sure it is checked) and click Save
- You should see Client ID and Client secret when you scroll down, save this information somewhere for later use.

## Add a Custom Scope
Scopes define and limit what access is granted by a token. You must define custom scopes in your authorization server in Okta. To do this:
- Select API from the navigation menu, then click Authorization Servers
- Click the default link
- Click the Scopes menu
- Click Add Scope
- Enter customScope as the name, and add a description, then click Create

## Installation
`
npm install
`
## Test Your Node and Express API
To run the app
`
node index.js
`

Use HTTPie to make a request to the /api/publicInfo endpoint

`http GET :3000/api/publicInfo` // You are viewing public info

`http GET :3000/api/profile` // Forbidden



