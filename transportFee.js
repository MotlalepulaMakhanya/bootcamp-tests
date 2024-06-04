function transportFee(time) {
    if (time === 'morning') {
        return 'R20';
    } else if (time === 'afternoon') {
        return 'R10';
    } else if (time === 'nightshift') {
        return 'free';
    } else {
        return 'Hah!'
    }
}
console.log(transportFee('morning'));
console.log(transportFee('afternoon'));
console.log(transportFee('nightshift'));
console.log(transportFee('Makhanya'));
