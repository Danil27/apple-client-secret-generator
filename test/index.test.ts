import { createClientSecret } from '../src/index';

test("Test generated client secret", () => {
    createClientSecret();
});