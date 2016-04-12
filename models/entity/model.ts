import {model, Model} from "mongoose";
import {schema} from "./schema";
import {IObject} from "./interface.ts";

export const _entityModel: Model<IObject> = model<IObject> ("Entity", schema);

// export const entityModel: Model<IObject> = _entityModel;