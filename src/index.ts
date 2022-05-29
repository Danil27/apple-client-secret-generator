import { sign } from 'jsonwebtoken';

export type ClientSecretConfig = {
    keyId: string;
    clientId: string;
    teamId: string;
    privateKey: string;
    expiresIn: string;
};

export function createClientSecret(config: ClientSecretConfig): string {
    return sign({
        exp: Math.round(new Date().getTime() / 1000.0) + config.expiresIn,
        aud: 'https://appleid.apple.com',
        sub: config.clientId,
        iss: config.teamId,
        kid: config.keyId,
    },
        config.privateKey,
        {
            algorithm: 'ES256',
        });
}