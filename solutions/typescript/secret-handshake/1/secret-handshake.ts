export function commands(num:number) {
  const binaryNum = num.toString(2)
  console.log(binaryNum)
  const binaryArray = binaryNum.split("").reverse()

  const gestures:string[] = ["wink", "double blink", "close your eyes","jump"]

  const resultArray = binaryArray.reduce((prev:string[],cur,index):string[]=>{ 
    if(cur === "1" && (gestures[index])){ prev.push(gestures[index])}
   return  prev 
    },[])

console.log(resultArray)
  if(binaryArray[4] ==="1"){ resultArray.reverse()} 
  return resultArray
}
