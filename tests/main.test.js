const { reverse, mirror, capicua } = require('../src/capicua');

describe('Funções de capicua', () => {

    test('mirror function', () => {
        expect(mirror("121")).toBe(true);
        expect(mirror("123")).toBe(false);
        expect(mirror("4444")).toBe(true);
        expect(mirror("abcd")).toBe(false);
    });

    test('capicua function', () => {
        expect(capicua("53")).toBe("88");
        expect(capicua("123")).toBe("444");
        expect(capicua("4")).toBe("4");
        expect(capicua("84")).toBe("363");
        expect(capicua("89")).toBe("8813200023188");
        expect(capicua("891")).toBe("79497");
        expect(capicua("32")).toBe("55");
    });
});
