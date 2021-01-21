function iffunction(variable , callback) {
    if (typeof variable === "function") {
        callback()
    }
}