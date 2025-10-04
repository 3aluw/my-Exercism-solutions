export class Squares {
  constructor(public count: number){}
  get sumOfSquares(): number {
    let i = 0;
    let sum = 0
    while (i <= this.count) {
      sum += i * i;
      i++
    }
    return sum
  }

  get squareOfSum(): number {
    let i = 0;
    let sum = 0
    while (i <= this.count) {
      sum += i;
      i++
    }
    return sum*sum
  }

  get difference(): number {
   return this.squareOfSum - this.sumOfSquares
  }
}
