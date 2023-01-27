function longCommonSubString(str1,str2){
  //longest common substring
  //str1="hello world "
  //str2="hello hi there "
  //first it is must be common and string must be longest
  /*let CommLonstring=""
  for(let i in str1)*/
  let CommLonstring=""
let str1Cop=str1.split(" ")
 let str2Cop=str2.split(" ") 
  console.log(str2Cop)
  for(let i=0;i<str1Cop.length;i++){
    for(let j=0;j<str2Cop.length;j++){
      if(str1Cop[i]==str2Cop[j] && str1Cop[i].length>CommLonstring.length){
        CommLonstring=str1Cop[i]
      }
    }
  }
  return CommLonstring==""?"can't find commonLongSubstring":CommLonstring
}

console.log(longCommonSubString("never give up by Strangers","never never gonna give up by Strangers "))