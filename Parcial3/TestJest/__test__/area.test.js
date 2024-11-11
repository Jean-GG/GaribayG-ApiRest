const area = require('../src/area.js');

test('Area calculada correctamente', () => {
    const res = area.areaCuadrado(2);
    expect(res).toBe(4);
});
