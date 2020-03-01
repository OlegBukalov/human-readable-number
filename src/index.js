module.exports = function toReadable (number) {
    let arr = number.toString().split(''), str = '', i=0;
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let numbersD= ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    if (number == 0) {
        return 'zero';
    }    
    if (arr.length == 3) {
        str += numbers[arr[i]]+' hundred ';
        i++;
    }
    if (arr.length == 2 || i>0) {
        if (arr[i] == 0) {
            i++;
        }
        else if (arr[i] == 1) {
            return str + numbersD[arr[i+1]];
        }
        else if (arr[i] == 2){
            str += 'twenty '
            i++;
        }
        else if (arr[i] == 4){
            str += 'forty '
            i++;
        }
        else {
            let des = numbersD[arr[i]];
            str += des.substr(0, des.length - 3)+'y ';
            i++;
        }
    }
    if (arr.length == 1 || i>0) {
        if (arr[i] == 0) {
            return str.substr(0, str.length-1);
        }
        str += numbers[arr[i]];;
    }
    return str;
}
