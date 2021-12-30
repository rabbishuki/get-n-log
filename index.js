module.exports = function getSafe(fn, defaultVal) {
    if (!fn) {
        console.warn('getSafe: undefined');
        return;
    }

    try {
        return fn();
    } catch (e) {
        const string = fn.toString();
        const search = string.slice(string.indexOf('.') + 1);
        console.warn('getSafe cant get:', search);
        return defaultVal;
    }
}
