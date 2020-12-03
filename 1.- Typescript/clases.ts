//Intro a las clases https://youtu.be/vIAVwVMeXP8
class Calculadora {

    numero:number;

    constructor(valor:number){
        console.log('iniciando calculadora');
        this.numero = valor;

        console.log(this.numero);

    }
    sumar(){
        return this.numero + this.numero;
    }
}
let calcA = new Calculadora(2);
console.log(calcA.sumar());