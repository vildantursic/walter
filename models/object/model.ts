import {model, Model} from "mongoose";
import {schema} from "./schema";
import {IObject} from "./interface.ts";

export const _objectModel: Model<IObject> = model<IObject> ("Object", schema);

// export const objectModel: Model<IObject> = _objectModel;