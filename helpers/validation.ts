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

export {checkObjectIDValidity, checkIfDataIsArray};
