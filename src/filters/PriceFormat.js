export default (value, float, device = '€') => {
    if (!value) return 'undefined'
    var number = parseFloat(value)
    if (!number == 'Nan') return 'undefined'
    return number.toFixed(float) + device
}