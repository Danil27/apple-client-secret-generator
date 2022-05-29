# apple-client-secret-generator
This package solves the problem of generating a JWT secret key for an Apple id, which is used for authorization through an apple id.

The implementation is based on Apple's (Generate and Validate Tokens )[https://developer.apple.com/documentation/sign_in_with_apple/generate_and_validate_tokens] documentation.
## Installation

npm i apple-client-secret-generator

## Usage
The value expiresIn must not be greater than 15777000 (6 months in seconds) from the Current UNIX Time on the server.

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
