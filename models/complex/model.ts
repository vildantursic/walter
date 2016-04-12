import {model, Model} from "mongoose";
import {schema} from "./schema";
import {IComplex} from "./interface.ts";

export const complexModel: Model<IComplex> = model<IComplex> ("Complex", schema);