export function getHashZeroPadding(str: string) {
  return str.padStart(64, "0");
}

export function extractFirstZeros(str: string) {
  const extractFirstZerosRegexp = new RegExp(/^0+/);
  const resultArray = extractFirstZerosRegexp.exec(str);
  return  resultArray === null ? "" : resultArray[0];
}
