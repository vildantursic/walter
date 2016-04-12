import {model, Model} from "mongoose";
import {schema} from "./schema";
import {IComplex} from "./interface.ts";

export const _complexModel: Model<IComplex> = model<IComplex> ("Complex", schema);

// export const complexModel: Model<IObject> = _complexModel;