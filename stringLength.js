const stringLength = (string) => {
    if (string.length < 1){
        throw new Error("should be use at least one character long");
    } else if (string.length > 10) {
        throw Error("Should be use not longer than 10 character");
    }
    return string.length;
}

module.exports = stringLength