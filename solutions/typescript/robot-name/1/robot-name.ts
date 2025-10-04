export class Robot {
  private robotName: string;
public static usedNames:string[] = []
   constructor() {
    this.robotName = this.createName();
  }
public createName():string{
let name = this.createNewName()

  //A loop that will ensure that the name is unique
while (Robot.usedNames.includes(name)) {
  name = this.createNewName(); // Generate a new name
  if (!Robot.usedNames.includes(name)) {
    break; // Exit the loop if the new name is unique
  }
}
  Robot.usedNames.push(name)
return name
}

public createNewName ():string{
   let numbers = '0123456789'
   let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   let name = ""
   name += this.randomPick(alphabet)
   name += this.randomPick(alphabet)
   name += this.randomPick(numbers)
   name += this.randomPick(numbers)
   name += this.randomPick(numbers)
   return name
}

private randomPick(arr:string):string{
let i:number = Math.floor(Math.random()*arr.length)
return arr[i]
}
  public get name(): string {
   return this.robotName
  }

  public resetName(): void {
   this.robotName  =  this.createName();
  }

  public static releaseNames(name:string): void {
   Robot.usedNames = []
  }
}
