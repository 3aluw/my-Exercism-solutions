export  class  GradeSchool {
   constructor(private table: {[key:number]:string[]}){
  this.table = {}
   }
   roster() {
     for (const key in this.table) {
      if (Object.prototype.hasOwnProperty.call(this.table, key)) {
        Object.freeze(this.table[key]);
      }
    }
    return this.table;
  }
preventDuplicate(name:string){
  let arrayHasDuplicate!:number 
 Object.keys(this.table).some((key)=> {arrayHasDuplicate = Number(key); return this.table[Number(key)].includes(name);})
 let indexOfTheItem = this.table[arrayHasDuplicate]?.findIndex(item => item === name)
 console.log(arrayHasDuplicate)
 this.table[arrayHasDuplicate]?.splice(indexOfTheItem,1)
}
  
  add(name: string, grade: number) {
 if(Object.keys(this.table).some((key)=> this.table[Number(key)].includes(name))) { this.preventDuplicate(name); return}
   if(!this.table[grade]) this.table[grade] = []
   this.table[grade].push(name)
    this.table[grade].sort()
  }

  grade(grade:number) {
      for (const key in this.table) {
      if (Object.prototype.hasOwnProperty.call(this.table, key)) {
        Object.freeze(this.table[key]);
      }
    }
    return this.table[grade] ?? []
  }
}
