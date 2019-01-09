module.exports = function getSafe(fn, defaultVal) {
    if (!fn) {
        console.warn('getSafe: undefined');
        return;
    }

    try {
        return fn();
    } catch (e) {
        const string = fn.toString();
        const search = string.substr(21, string.length - 24);
        console.warn('getSafe cant get:', search);
        return defaultVal;
    }
}
