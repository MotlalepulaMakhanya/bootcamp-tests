describe('countRegNumber test', function () {
    it('count multiple registration numbers', function () {
        const regNumbers = 'CA1234,CY5678,CJ9012';
        const result = countRegNumber(regNumbers);
        const expected = 3;
        assert.equal(result, expected);
    });

    it('count a single registration number', function () {
        const regNumbers = 'CA1234';
        const result = countRegNumber(regNumbers);
        const expected = 1;
        assert.equal(result, expected);
    });

});