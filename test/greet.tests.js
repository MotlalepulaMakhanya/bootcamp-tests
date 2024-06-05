
describe('Greetings Function test', function () {
    it('greet Makhanya correctly', function () {
        assert.equal(greet('Makhanya'), 'Hello, Makhanya');
    });

    it('greet Orifha correctly', function () {
        assert.equal(greet('Alex'), 'Hello, Alex');
    });

    it('greet an empty string correctly', function () {
        assert.equal(greet(''), 'Hello, ');
    });
});
