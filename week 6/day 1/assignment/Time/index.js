
const time = (a) => {
    a = a.toString()
    if (a.length == 1) {

        return `${a} Milisecond`
    }
    else if (a.length == 4) {
        return `${Math.floor(a / 1000)} Seconds`
    }
    else if (a.length == 5) {
        return `${Math.floor(a / 60000)} Minute`
    }
    else if (a.length == 6 && (a % 60000) == 0) {
        return `${Math.floor(a / 60000)} Minutes`
    }
    else if (a.length == 6) {
        return `${Math.floor(a / 60000)} Minutes ${Math.floor(a % 60000) / 1000} Seconds`
    }
    else if (a.length == 7 && (a % 600000) == 0 && a < 3600000) {
        return `${Math.floor(a / 60000)} Minutes`
    }
    else if (a.length == 7 && a < 3600000) {
        return `${Math.floor(a / 60000)} Minutes ${Math.floor(a % 60000) / 1000} Seconds`
    }
    else if (a.length == 7) {
        return `${Math.floor(a / 3600000)} Hours`
    }

}

module.exports = {  time}
