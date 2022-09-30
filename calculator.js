// set - установить начальное значение (по умолчанию 0)
// add - сложение
// sub - вычитание
// mult - умножение
// div - деление


let newValue;

function setValue(defaultValue) {
    return  newValue = defaultValue;
};

function add(value) {
    return (newValue += value);
}
function sub(value) {
    return (newValue -= value);
}
function mult(value) {
    return (newValue *= value);
}
function div(value) {
    return (newValue /= value);
}

module.exports = {
    add,
    sub,
    mult,
    div,
    setValue,
    newValue,
};