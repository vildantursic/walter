import {Model} from "mongoose";
import {schema} from "./schema";
import {IObject} from "./interface.ts";
import {conn} from "../../connections/connection";

export const objectModel: Model<IObject> = conn.model<IObject> ("Object", schema);
