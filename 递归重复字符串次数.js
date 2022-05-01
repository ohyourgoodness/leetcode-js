/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var reg = /(\d+)*\[(\w+)*\]/g
    do {
        s = s.replace(reg, ($0, $1, $2)=> {
            return $2.repeat($1);
        })
    } while (s.match(reg));
    return s;
};
