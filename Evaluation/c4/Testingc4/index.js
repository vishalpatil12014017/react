function storage(bytes, decimals = 3) {
    if (bytes === 0) {
        return "0 Bytes"
    }
    let k = 1024;
    let deci = decimals < 0 ? 0 : decimals
    var size = ["Bytes", "Kb", "Mb", "Gb"]
    var p = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, p)).toFixed(deci)) + " " + size[p]

}
module.exports = { storage }