export function toRna(dna:string) {
  let reg = /([^G,C,T,A])/
  
  const chars : { [key: string]: string }= {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

  if(reg.test(dna)){
 throw 'Invalid input DNA.'
  }else{
 return  dna.replace(/[GCTA]/g, m => chars[m]) 
  }

}
