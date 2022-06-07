"use strict";
function addValues(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addValues('Teodora', 'A');
result.split(' ');
//# sourceMappingURL=function-overloads.js.map