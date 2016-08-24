var parseYAML = function (yaml) {
    var jsonObj = {};
    var eatYAML = function (str, obj, trail) {
        str = str.substring(trail.length * 2, str.length);
        var newLineIndex = str.search(/\n/);
        var line = str.substring(0, newLineIndex);
        var remainder = str.substring(newLineIndex + 1, str.length);
        var colonIndex = line.search(/:/);
        var beforeColon = line.substring(0, colonIndex);
        var afterColon = line.substring(colonIndex + 1, line.length);
        var afterColonValue = afterColon.substring(1, afterColon.length);
        if (afterColonValue && afterColonValue.length) {
            obj[beforeColon] = afterColonValue;
        }
        var numSpaces = remainder.search(/[^ ]/);
        if (numSpaces < 0) {
            return jsonObj;
        }
        var newDepth = Math.floor(numSpaces / 2);
        if (newDepth > trail.length) {
            obj[beforeColon] = {};
            trail.push(obj[beforeColon]);
            return eatYAML(remainder, obj[beforeColon], trail);
        }
        if (newDepth == trail.length) {
            return eatYAML(remainder, obj, trail);
        }
        if (newDepth < trail.length) {
            trail.splice(newDepth, (trail.length - newDepth));
            return eatYAML(remainder, trail.length ? trail[trail.length-1] : jsonObj, trail);
        }
    }
    return eatYAML(yaml, jsonObj, []);
}
