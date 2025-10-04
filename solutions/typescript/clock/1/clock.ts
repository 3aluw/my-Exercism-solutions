export class Clock {
  private hour : number
  private minute : number
  constructor(hour: number, minute?: number) {
let generatedClock = this.clockGenerator(hour,minute)
this.hour = generatedClock.hour
this.minute = generatedClock.minute
  }

private formatNumber(num:number):string{
 return num <10 ? `0${num}`: `${num}`
}
  public toString(): string {
    return `${this.formatNumber(this.hour)}:${this.formatNumber(this.minute)}`
  }
  
private clockGenerator(hour:number, minute?: number):{hour:number,minute:number}{
//use only minutes : transfer hours to minutes then calculate everything in minutes then transfer it back to hours
const hoursInMInutes = hour * 60;
const timeInMinutes = minute ? hoursInMInutes + minute : hoursInMInutes

//one day is 1440 minutes
const minutesOfTheCurrentday = timeInMinutes >= 0 ?   timeInMinutes % 1440 : 1440 + timeInMinutes % 1440

hour =Math.trunc(minutesOfTheCurrentday / 60) 
minute= Math.trunc(minutesOfTheCurrentday % 60) 
return { hour, minute}
}

  public plus(minutes: number): Clock {
    const newClock = this.clockGenerator(this.hour, this.minute + minutes)
    this.hour = newClock.hour
    this.minute = newClock.minute
    return this
  }

  public minus(minutes: number): Clock {
   const newClock = this.clockGenerator(this.hour, this.minute - minutes)
    this.hour = newClock.hour
    this.minute = newClock.minute
    return this
  }

  public equals(otherClock: Clock): boolean {
   return this.toString() === otherClock.toString() ? true : false
  }
}