import { Distancia } from './distanciaDosPuntos';//exportar archivo para uso de clase

class Triangulo extends Distancia {//herencia, y agrega nueva propiedad
    private tipo: string;
    private x3: number;
    private y3:number;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        super(x1,y1,x2,y2);//Super ->Llamar el constructor de la otra clase
        this.x3=x3;
        this.y3=y3;
        this.tipo = this.siEs(x1, y1, x2, y2, x3, y3) ? "Si es triangulo" : "No es un triángulo";
    }

    imprimir(): void {
        super.imprimir();
        console.log(`Triangulo: ${this.tipo}`);
        console.log(`${this.siEs(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3)}`);
    }

    siEs(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): boolean {
        const d1 = this.calcularD(x1, x2, y1, y2);
        console.log(`Punto A a Punto B: ${d1}`);
        const d2 = this.calcularD(x1,x3,y1,y3);
        console.log(`Punto A a Punto C: ${d2}`);
        const d3 = this.calcularD(x3,x2,y3,y2);
        console.log(`Punto B a Punto C: ${d3}`);

        return (d1 + d2 > d3 && d2 + d3 > d1 && d1 + d3 > d2);
    }
}



const triangulo = new Triangulo(3,6,4,3,5,3);
triangulo.imprimir();
