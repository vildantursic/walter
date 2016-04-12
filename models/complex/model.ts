import {model, Model} from "mongoose";
import {schema} from "./schema";
import {IObject} from "./interface.ts";

export const _complexModel: Model<IObject> = model<IObject> ("Complex", schema);

// export const complexModel: Model<IObject> = _complexModel;