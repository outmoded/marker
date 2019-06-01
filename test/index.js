'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Marker = require('..');


const internals = {};


const { describe, it } = exports.lab = Lab.script();
const { expect } = Code;


describe('Marker', () => {

    it('generates symbol and reuses it', () => {

        const symbol1 = Marker('test1');
        const symbol2 = Marker('test2');

        expect(symbol1).to.not.equal(symbol2);

        expect(symbol1).to.equal(Marker('test1'));
        expect(symbol2).to.equal(Marker('test2'));
    });
});
