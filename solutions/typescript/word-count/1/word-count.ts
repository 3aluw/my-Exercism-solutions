  interface IWordsCount {
  [key: string]: number;
}
export function  count(subs:string):Map<string, number> {

 const wordsObj:IWordsCount = {}
const wordsArray = subs.split(/[^a-zA-Z\d']+/)
wordsArray.forEach((el)=>{  
  el = el.replace(/^'|'$/gm, '').toLowerCase()
  if(el){
    
    wordsObj.hasOwnProperty(el) ? wordsObj[el] +=1: wordsObj[el] = 1}})

return new Map(Object.entries(wordsObj))
}
