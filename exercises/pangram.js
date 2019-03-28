const str1 = "How quickly daft jumping zebras vex";
const str = str1.toLowerCase();
​
const apl = 'abcdefghijklmnopqrstuvwxyz';
const arr1 = apl.split('');
​
​
function isPangram(string){
const apl = 'abcdefghijklmnopqrstuvwxyz';
const arr1 = apl.split('');
let checkArr = '';
  arr1.reduce((checkarr, a)=>{
  if(string.includes(a)){
    checkArr=checkArr+a;
  }
  return checkArr;
},'')
  return apl === checkArr;
}
​
console.log(isPangram(str));
​

// function isPangram1(str1){
//     return new Set(str1.match(/[a-z]/gi)).size == 26? true : false;
//   }
  
​
// function isPangram(string){ 
//    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string) 
// }
​
