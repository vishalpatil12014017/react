let Calculator = (n) => {
    if (typeof(n) !== "number") {
        return "Invalid Input";
    } else if (n < 0) {
        return "Invalid Input";
    } else if (n < 250000) {
        return 0;
    } else if (n < 500000) {
        let remain = n / 2;
        let tax = (remain / 100) * 10;
        return tax;
    } else if (n < 1000000) {
        let remain = (n / 100) * 70;
        let tax = (remain / 100) * 20;
        return tax;
    } else {
        let deduce = (n / 100) * 10;
        if (deduce > 50000) {
            deduce = 50000;
        }
        let remain = n - deduce;
        let tax = (remain / 100) * 30;
        return tax
    }
}
module.exports = { Calculator }
