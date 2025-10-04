export  class Matrix {
  constructor(public arrayStr:string) {
     this.arrayStr = arrayStr;

  }

  get rows(): number[][] {
    const rows = this.arrayStr.split("\n").map(el=> el.split(' ')).map(el=> el.map(num=>Number(num,)));
    return rows
  }

  get columns(): number[][] {
   const columns:number[][] = [[]]
   this.rows.forEach((el)=>{
    console.log(el)
    el.forEach((subEl,subIndex)=>{
 if(!Array.isArray(columns[subIndex])) columns[subIndex]  = []
 columns[subIndex].push(subEl)
    })
   })
   return columns
  }
}