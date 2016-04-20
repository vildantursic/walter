import * as ExpressBrute from "express-brute";

let store: ExpressBrute.MemoryStore = new ExpressBrute.MemoryStore();
export let bruteForce: ExpressBrute = new ExpressBrute(store, {
    freeRetries: 2000,
    minWait: 60 * 1000
});
