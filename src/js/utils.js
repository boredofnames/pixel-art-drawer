var pako = require("pako");

export function compress(s) {
  return pako.deflate(JSON.stringify(s), { to: "string" });
}
export function decompress(s) {
  return JSON.parse(pako.inflate(s, { to: "string" }));
}
