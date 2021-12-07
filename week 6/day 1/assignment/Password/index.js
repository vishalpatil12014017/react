
const password = (data) => {
    if (data.length < 6) return "Enter 6 Digits characters";
    if(data[0]=="@"){
        return "Cant start with special symbol"
    }
    
    let upper = 0;
    var count=0
    for (let i = 0; i < data.length; i++) {
        if (data[i] === data[i].toUpperCase()) upper++;
        if(data[i]=="@"){
            count++
        }
        if(count>1) return "Cant use two special charactors"
    }
    if (upper === 0) {
        return "Must have upper case letter"
    };

    let lower = 0;
    for (let i = 0; i < data.length; i++) {
        if(data[i]==" ") return "Cant put Empty space"
        if (data[i] === data[i].toLowerCase()) lower++;
    }
    if (lower === 0) {
        return "Must have lower case letter"
    };

    let num = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 10; j++) {
            if(data[0]==j) return "Cant start with Numbers"
            if (data[i] == j) {
                num++;
                break;
            }
        }
    }
    if (num === 0) {
        return "Minimum 1 Number Required";
    }

    if ((data.search("@") === -1) && (data.search("#") === -1)){
        return "Must have special symbol"
    };
   

    return "Password is Correct";
}
module.exports = {password }
