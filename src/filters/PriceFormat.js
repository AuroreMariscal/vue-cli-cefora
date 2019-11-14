export default (value) => {
    if (!value) return 'undefined'
    var float = parseFloat(value)
    if (!float == 'Nan') return 'undefined'
    return float.toFixed(2)
}