/// <reference path="../../typings/main.d.ts" />

import {Document} from "mongoose";

export interface IComplex extends Document {
    address: string;
    name: string;
}
