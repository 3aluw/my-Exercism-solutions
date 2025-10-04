export function decodedValue(arr:string[]) {
  enum colors {
 black ,
    brown,
    red ,
    orange ,
    yellow,
    green ,
    blue  ,
    violet  ,
    grey ,
    white }
    if (
   
    !Object.values(colors).includes(arr[0]as unknown as colors) ||
    !Object.values(colors).includes(arr[1]as unknown as colors)
   
  ) {
    throw new Error("Invalid input");
  }


return parseInt(`${colors[arr[0]as unknown as colors]}${colors[arr[1]as unknown as colors]}`)
}