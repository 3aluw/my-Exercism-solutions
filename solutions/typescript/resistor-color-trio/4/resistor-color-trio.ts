interface COLORS {
    [index: string]: string;
}
const colors: COLORS = {
    "black": "0",
    "brown": "1",
    "red": "2",
    "orange": "3",
    "yellow": "4",
    "green": "5",
    "blue": "6",
    "violet": "7",
    "grey": "8",
    "white": "9",
};
const resistanceUnits = {
    1e9: "gigaohms",
    1e6: "megaohms",
    1e3: "kiloohms",
    1: "ohms",
} as const



// Format the resistance value with the appropriate unit
const formatResistance  = (number: number, multiple: keyof typeof resistanceUnits) => {
   const stringResult = (number / multiple).toString().replace(/^0+/, "")
  const numericValue = stringResult === '' ? 0 : stringResult
  return numericValue === 0 ? "0 ohms" : `${numericValue} ${resistanceUnits[multiple]}`
}

// Decode resistor bands into a resistance value with units
export function decodedResistorValue(arr: string[]) {

    const [firstBand, secondBand, thirdBand] = arr
    const resistanceValue  = Number(`${colors[firstBand]}${colors[secondBand]}${"0".repeat(parseInt(colors[thirdBand]))}`)

    const largerMultiple = Number(Object.keys(resistanceUnits).reverse().find((muliple) => (resistanceValue  % Number(muliple) == 0)))! as keyof typeof resistanceUnits
    return formatResistance (resistanceValue , largerMultiple)
}
