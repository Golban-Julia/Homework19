// set - установить начальное значение (по умолчанию 0)
// add - сложение
// sub - вычитание
// mult - умножение
// div - деление

function setValue(value) {
    return a = value;;
};

function add(b) {
    return (a += b);
}
function sub(b) {
    return (a -= b);
}
function mult(b) {
    return (a *= b);
}
function div(b) {
    return (a /= b);
}



module.exports = {
    add,
    sub,
    mult,
    div,
    setValue,
};