import {model, Model} from "mongoose";
import {object} from "../models/object/object";

import IObject = require("../models/object/i_object");

const _objectModel: Model<IObject> = model<IObject> ("Object", object);

export const objectModel: Model<IObject> = _objectModel;