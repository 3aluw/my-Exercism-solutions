export  function hey(message: string): string {
 const regOne = /[a-z]/gi
const capitalReg = /[A-Z]/g
const strExtracted = message.match(regOne) ?? []
const allCapital = strExtracted.length ? strExtracted.every(el => {capitalReg.lastIndex = 0 ; return capitalReg.test(el)}) : false

const questionReg = /\?\s*?$/g
const qMarkTest = questionReg.test(message);

const spaceTest = message.match(/\s/g)?.length === message.length  || message.length === 0;
  
if(allCapital && qMarkTest) return "Calm down, I know what I'm doing!"
else if( allCapital) return "Whoa, chill out!"
else if(qMarkTest) return "Sure."
else if(spaceTest) return "Fine. Be that way!"
else  return "Whatever."
}


