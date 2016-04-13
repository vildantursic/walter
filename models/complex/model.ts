import {model, Model} from "mongoose";
import {schema} from "./schema";
import {IComplex} from "./interface.ts";
import {conn} from "../../connections/connection";

export const complexModel: Model<IComplex> = conn.model<IComplex> ("Complex", schema);