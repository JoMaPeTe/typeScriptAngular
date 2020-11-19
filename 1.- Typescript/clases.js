"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(valor) {
        console.log('iniciando calculadora');
        this.numero = valor;
        console.log(this.numero);
    }
    Calculadora.prototype.sumar = function () {
        return this.numero + this.numero;
    };
    return Calculadora;
}());
var calcA = new Calculadora(2);
console.log(calcA.sumar());
