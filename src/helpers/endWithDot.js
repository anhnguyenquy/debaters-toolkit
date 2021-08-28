export const endWithDot = (str) => {
    if (str.slice(-1) == ".") {
        return (str)
    }
    else {
        return (str + ".")
    }
}