let checkData: Function = (param: String): Boolean => {
    // add more filters and if statement for data to see if it fit your needs
    return param.length === 24;
};
let checkIfDataIsArray: Function = (data): Array<Object> => {
    if (Array.isArray(data)) {
        return data;
    } else {
        let arr: Array<Object> = [];
        arr.push(data);
        return arr;
    }
};

export {checkData, checkIfDataIsArray};
