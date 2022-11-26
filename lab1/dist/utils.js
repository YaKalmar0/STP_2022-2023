"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractFirstZeros = exports.getHashZeroPadding = void 0;
function getHashZeroPadding(str) {
    return str.padStart(64, "0");
}
exports.getHashZeroPadding = getHashZeroPadding;
function extractFirstZeros(str) {
    const extractFirstZerosRegexp = new RegExp(/^0+/);
    const resultArray = extractFirstZerosRegexp.exec(str);
    return resultArray === null ? "" : resultArray[0];
}
exports.extractFirstZeros = extractFirstZeros;
//# sourceMappingURL=utils.js.map