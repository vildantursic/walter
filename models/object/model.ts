import {model, Model} from "mongoose";
import {schema} from "./schema";
import {IObject} from "./interface.ts";

export const objectModel: Model<IObject> = model<IObject> ("Object", schema);