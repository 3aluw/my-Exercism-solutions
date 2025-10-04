export class DnDCharacter {
  public static generateAbilityScore(): number {
  let diceRes : number[] = []; 
   while(diceRes.length < 4 ){diceRes.push(Math.floor(Math.random()*6 + 1))}

   let smallestRes:number = Math.min(...diceRes)

  diceRes.splice(diceRes.indexOf(smallestRes),1)

   return diceRes.reduce((p,c)=> p+c)
  }

  

  charisma = DnDCharacter.generateAbilityScore();
  wisdom = DnDCharacter.generateAbilityScore();
  intelligence = DnDCharacter.generateAbilityScore();
  constitution = DnDCharacter.generateAbilityScore();
  dexterity = DnDCharacter.generateAbilityScore();
  strength = DnDCharacter.generateAbilityScore();

  
  public static getModifierFor(abilityValue: number): number {
    
return Math.floor((abilityValue-10)/2)
  }
  hitpoints = 10 +  DnDCharacter.getModifierFor(this.constitution)
}
