 import $ from 'jquery';
 
 export  function Vname(name){
    var p = /^[\u0600-\u06FF\s]+$/;
    if(!p.test(name)){
        return false;
    }
    return true;
}

 export function VnationalCode(codM)
{
    // let codMn= Number(codM)
    if (isNaN(codM) || codM.length === 10) {
        
        if (codM === '1111111111' ||
            codM === '0000000000' ||
            codM === '2222222222' ||
            codM === '3333333333' ||
            codM === '4444444444' ||
            codM === '5555555555' ||
            codM === '6666666666' ||
            codM === '7777777777' ||
            codM === '8888888888' ||
            codM === '9999999999') {
                console.log("codM111")
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
        if ((r === 0 && r === c) || (r === 1 && c === 1) || (r > 1 && c === 11 - r)) {
            console.log("codM222")
            return true;
        } else {
            console.log("codM333")
            return false;
        }
    } else {
        return false;
    }
}

export  function Vsheba(input){
    input = input.replace(/\(|\)|\s|_/g, "").replace(/\(|\)|\s|-/g, "")
      var ir = input.substring(0, 2);
      var twoFirstDigits = input.substring(2, 4);
      var  others = input.substring(4, input.length);
      input = others+"1827"+twoFirstDigits;
      var part1 = input.substring(0 , 4);
      var part2 = input.substring(4 , 12);
      var part3 = input.substring(12, 20);
      var part4 = input.substring(20);
   
      var mod1 = (parseInt(part1) % 97) * 81 * 81 * 81;
      var mod2 = (parseInt(part2) % 97) * 81 * 81;
      var mod3 = (parseInt(part3) % 97) * 81;
      var mod4 = (parseInt(part4) % 97) * 1 ;
      var mod = (mod1 + mod2 + mod3 + mod4) % 97;

      if(mod == 1) {
         return true ;
      }
      else {
         return false;
      }
    }




export  function Vbirth(birth){
    const birthReg=  /^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$/;
    if (birthReg.test(birth)){
        return true;
    }
    else{
        return false;
    }
}



