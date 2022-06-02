exports.caesarCipher = function(str,num) {

let ciphArr=[];
let strArr = str.split("");
let pattern = /[A-Za-z]/;

for(let value of strArr){
  if(pattern.test(value)){
    ciphArr.push(shifter(value,num));
  }
  else{
    ciphArr.push(value);
  }
}
return ciphArr.join('');
};

function shifter(char,numToShift){
  let shiftNum = numToShift*2;
  let letters = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z'];
let charIndex = letters.indexOf(char)+shiftNum;
  if(charIndex>51){
    charIndex -= 52;
  }
  else if(charIndex<0){
      charIndex= 52 + charIndex
  }
return letters[charIndex];
  
};

