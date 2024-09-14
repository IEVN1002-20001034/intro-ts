import { Distancia } from './distanciaDosPuntos';//exportar archivo para uso de clase

class Triangulo extends Distancia {//herencia, y agrega nueva propiedad
    private tipo: string;

    constructor(punto1: { x: number, y: number }, punto2: { x: number, y: number}, punto3:{x:number, y:number}) {
        super(punto1, punto2);//Super ->Llamar el constructor de la otra clase
       // this.punto3 = punto3;
        this.tipo = this.siEs() ? "Si es triangulo" : "No es un triángulo";
    }

    imprimir(): void {
        super.imprimir();
        console.log(`Resultado: ${this.tipo}`);
        console.log(`Resultado: ${this.siEs()}`);
    }

    siEs(): boolean {
        const d1 = this.calcularD1(puntoA.x, puntoB.x, puntoA.y, puntoB.y);
        console.log(`Resultado: ${d1}`);
        const d2 = this.calcularD1(puntoA.x, puntoC.x, puntoA.y, puntoC.y);
        console.log(`Resultado: ${d2}`);
        const d3 = this.calcularD1(puntoC.x, puntoB.x, puntoC.y, puntoB.y);
        console.log(`Resultado: ${d3}`);
        console.log(`Resultado: ${puntoC.x}`);
        console.log(`Resultado: ${puntoC.y}`);

        return (d1 + d2 > d3 && d2 + d3 > d1 && d1 + d3 > d2);
    }
}

const puntoA = { x: 3, y: 6 };
const puntoB = { x: 4, y: 3};
const puntoC = { x: 5, y: 3 };


const triangulo = new Triangulo(puntoA, puntoB, puntoC);
triangulo.imprimir();


//identificar triangulo
// Importamos o usamos la clase Distancia
// class Triangulo extends Distancia {

//     constructor(punto1: { x: number, y: number }, punto2: { x: number, y: number }, punto3: { x: number, y: number }) {
//         super(punto1, punto2, punto3); // Llamamos al constructor de la clase padre
//     }

//     public esTriangulo(): boolean {
//         const d1 = this.calcularD1();
//         const d2 = this.calcularD2();
//         const d3 = this.calcularD3();


//         if (d1 + d2 > d3 && d2 + d3 > d1 && d1 + d3 > d2) {
//             return true; // Sí, es un triángulo
//         } else {
//             return false; // No es un triángulo
//         }
//     }
// }

// const puntoA = { x: 1, y: 2 };
// const puntoB = { x: 7, y: 12 };
// const puntoC = { x: -5, y: -5 };
// const triangulo = new Triangulo(puntoA, puntoB, puntoC);

// console.log(triangulo.calcularD1()); 
// console.log(triangulo.calcularD2());
// console.log(triangulo.calcularD3());
