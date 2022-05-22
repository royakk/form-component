 export default function Validator(codM)
{
    if (isNaN(codM) || codM.length == 10) {
        if (codM == '1111111111' ||
            codM == '0000000000' ||
            codM == '2222222222' ||
            codM == '3333333333' ||
            codM == '4444444444' ||
            codM == '5555555555' ||
            codM == '6666666666' ||
            codM == '7777777777' ||
            codM == '8888888888' ||
            codM == '9999999999') {

            return false;
        }
      let  c = parseInt(codM.charAt(9));
      let  n = parseInt(codM.charAt(0)) * 10 +
            parseInt(codM.charAt(1)) * 9 +
            parseInt(codM.charAt(2)) * 8 +
            parseInt(codM.charAt(3)) * 7 +
            parseInt(codM.charAt(4)) * 6 +
            parseInt(codM.charAt(5)) * 5 +
            parseInt(codM.charAt(6)) * 4 +
            parseInt(codM.charAt(7)) * 3 +
            parseInt(codM.charAt(8)) * 2;
       let r = n - parseInt(n / 11) * 11;
        if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

