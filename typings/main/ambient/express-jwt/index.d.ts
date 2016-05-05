// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/42fce07b0a337ed4fd272eb83bff68e828c66003/express-jwt/express-jwt.d.ts
// Type definitions for express-jwt
// Project: https://www.npmjs.org/package/express-jwt
// Definitions by: Wonshik Kim <https://github.com/wokim/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "express-jwt" {
    import express = require('express');
    function jwt(options: jwt.Options): jwt.RequestHandler;

    interface IDoneCallback<T> {
        (err: Error, result: T): void;
    }

    type ICallback = <T>(req: express.Request, payload: T, done: IDoneCallback<boolean>) => void;

    namespace jwt {
        export interface Options {
            secret: string|Buffer|ICallback;
            userProperty?: string;
            skip?: string[];
            credentialsRequired?: boolean;
            isRevoked?: boolean;
            requestProperty?: string;
            getToken?: ICallback;
            [property: string]: any;
        }
        export interface RequestHandler extends express.RequestHandler {
            unless?: any;
        }
    }
    export = jwt;
}