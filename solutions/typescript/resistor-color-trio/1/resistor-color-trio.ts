export function decodedResistorValue(arr:string[]) {
interface COLORS {
  [index: string]: string;
}
 
 const colors : COLORS = {
"Black": "0",
"Brown": "1",
"Red": "2",
"Orange": "3",
"Yellow": "4",
"Green": "5",
"Blue": "6",
"Violet": "7",
"Grey": "8",
"White": "9",
  }
  const first:string = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
  const second = arr[1].charAt(0).toUpperCase() + arr[1].slice(1)
  const third = arr[2].charAt(0).toUpperCase() + arr[2].slice(1)
  
  const resInNumbers = `${colors[first]}${colors[second]}${"0".repeat(parseInt(colors[third]))}`
  console.log(resInNumbers)
    if(resInNumbers.search("000")!=-1){
      return `${resInNumbers.replace("000","")} kiloohms` 
    } else {
      return `${resInNumbers} ohms`
    }
}