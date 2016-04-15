/// <reference path="../../typings/main.d.ts" />

import {Document} from "mongoose";

export interface IUser extends Document {
    guid: string;
    secret: string;
    username: string;
}
