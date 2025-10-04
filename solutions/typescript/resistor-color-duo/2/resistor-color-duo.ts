  enum colors {
    black ,
    brown,
    red ,
    orange ,
    yellow,
    green ,
    blue  ,
    violet  ,
    grey ,
    white }

export function decodedValue(arr:(keyof typeof colors)[]) {

return colors[arr[0]] * 10 + colors[arr[1]]
}