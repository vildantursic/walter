let checkObjectIDValidity: Function = (param: string): Boolean => {
    // add more filters and if statement for data to see if it fit your needs
    let re = new RegExp("^[0-9a-fA-F]{24}$");
    return (re.test(param));
};
let checkIfDataIsArray: Function = (data: Array<Object>): Array<Object> => {
    if (Array.isArray(data)) {
        return data;
    } else {
        let arr: Array<Object> = [];
        arr.push(data);
        return arr;
    }
};

// it is possible to add different messages (json format) for different api routes, but didn't have time for that
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

export {checkObjectIDValidity, checkIfDataIsArray, errorIDValidationMessages, errorApiMessages};
