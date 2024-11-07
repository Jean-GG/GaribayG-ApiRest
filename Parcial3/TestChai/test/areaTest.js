//import assert from 'node:assert';
import * as chai from 'chai';
import test from 'node:test';
import * as area from "../src/area.js";

test('Si le mando un 2 debe dar 4', () => {
    let res = area.areaCuadrado(2)
    chai.assert.equal(res, 4);
    chai.assert.typeOf(res, 'number');
    
    //chai.expect(res).to.be.a('number');
  });