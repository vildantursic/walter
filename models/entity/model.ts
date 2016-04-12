import {model, Model} from "mongoose";
import {schema} from "./schema";
import {IEntity} from "./interface.ts";

export const _entityModel: Model<IEntity> = model<IEntity> ("Entity", schema);

// export const entityModel: Model<IObject> = _entityModel;