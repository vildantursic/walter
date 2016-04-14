
// it is possible to add different messages (json format) for different api routes, but didn't have time for that
// also possible to make generator for error messages.
let errorIDValidationMessages = {
    deleteMessage: "Invalid object for deletion, Argument passed in must be a single String of 24 hex characters",
    getMessage: "Invalid object for search, Argument passed in must be a single String of 24 hex characters",
    postMessage: "",
    putMessage: "invalid object for update, Argument passed in must be a single String of 24 hex characters"
};
let errorApiMessages = {
    deleteMessage: "Error happened during retrieving data from server",
    getMessage: "Error happened during retrieving data from server",
    postMessage: "Error happened while sending data to server",
    putMessage: "Error happened while updating data"
};

export {errorIDValidationMessages, errorApiMessages};
