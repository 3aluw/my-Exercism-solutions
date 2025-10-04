export function score(x: number, y: number): number{
let X = Math.pow(x,2)
let Y = Math.pow(y,2)
const distance: number = Math.sqrt(X + Y) /2
let points = distance <=0.5 ? 10 :  distance <=2.5 ? 5 :  distance <= 5 ? 1 : 0   

return points
}
