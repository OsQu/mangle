exports.mangle = function(str) {
  return str.replace(/./g, "_");
}
