export  function isPangram(str : string) {
  let res = str.match(/([A-Z])/gi)?.map(el=> el.toLowerCase())
return [...new Set(res) ].length === 26}
