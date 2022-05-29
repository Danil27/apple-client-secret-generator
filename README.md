# apple-client-secret-generator
This package solves the problem of generating a JWT secret key for an Apple id, which is used for authorization through an apple id.

The implementation is based on Apple's Generate and Validate Tokens documentation and is built using Auth0's jsonwebtoken package.

## Installation

npm i apple-client-secret-generator

## Usage
___ The value expiresIn must not be greater than 15777000 (6 months in seconds) from the Current UNIX Time on the server.___

```js
const { createClientSecret } = require('./index');
const fs = require('fs');

const config = {
    keyId: '',
    clientId: '',
    teamId: '',
    privateKey: fs.readFileSync('../../AuthKey_TEST323.p8', 'utf8'),
    expiresIn: 86400*180,
};

const clientSecret = createClientSecret(config);`
```
