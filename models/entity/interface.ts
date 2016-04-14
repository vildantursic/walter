/// <reference path="../../typings/main.d.ts" />

import {Document} from "mongoose";

export interface IEntity extends Document {
    address: string;
    name: string;
}
