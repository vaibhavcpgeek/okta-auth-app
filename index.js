const express = require("express");
const OktaJwtVerifier = require("@okta/jwt-verifier");

const clientId = "59c9687bf09bb2cfc"; // Sample Client id generated in OKTA
const oktaDomain = "https://publicissapient-vaibhav.okta.com/"; // Your OKTA domain name

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `${oktaDomain}/oauth2/default`,
  clientId: clientId
});

const app = express();
const port = 3000;

// public route
app.get("/api/publicInfo", (req, res) => {
  res.status(200).send("You are viewing public info");
});

// protected route
app.get("/api/profile", verifyToken, (req, res) => {
  oktaJwtVerifier
    .verifyAccessToken(req.token)
    .then(jwt => {
      res.send("You are viewing private profile info");
    })
    .catch(err => {
      res.sendStatus(403);
    });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.listen(port, () => console.log(`My App listening on port ${port}!`));
