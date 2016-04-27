import {Model} from "mongoose";
import {schema} from "./schema";
import {IBim, IBimModel} from "./interface.ts";
import {conn} from "../../connections/connection";

export const bimModel: IBimModel = <IBimModel>conn.model<IBim> ("Bim", schema);
