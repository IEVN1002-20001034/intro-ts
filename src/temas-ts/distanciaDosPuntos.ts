export class Distancia { //export para poder usar en otro lado la clase
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    // punto3: { x: number, y: number };
    distancia1: number;
    // distancia2: number;
    // distancia3: number;

    constructor(x1: number, y1: number, x2: number, y2: number ) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
     
        this.distancia1 = 0;
        // this.distancia2 = 0;
        // this.distancia3 = 0;
    }

    public calcularD1(x1:number, x2:number, y1:number, y2:number) {
        const r1 = x2 - x1;
        const r2 = y2 - y1;
        this.distancia1 = Math.sqrt(r1 * r1 + r2 * r2);
        return this.distancia1;
    }

    // public calcularD2() {
    //     const r3 = this.punto3.x - this.punto2.x;
    //     const r4 = this.punto3.y - this.punto2.y;
    //     this.distancia2 = Math.sqrt(r3 * r3 + r4 * r4);
    //     return this.distancia2;
    // }

    // public calcularD3() {
    //     const r5 = this.punto3.x - this.punto1.x;
    //     const r6 = this.punto3.y - this.punto1.y;
    //     this.distancia3 = Math.sqrt(r5 * r5 + r6 * r6);
    //     return this.distancia3;
    
    imprimir(): void{
        console.log(`La distancia 1 (Punto A a B)${dist.calcularD1(this.punto1.x, this.punto2.x, this.punto1.y, this.punto2.y)}`)
        // console.log(`La distancia 2 (Punto B a C)${dist.calcularD2()}`);
        // console.log(`La distancia 3 (Punto C a A)${dist.calcularD3()}`); 
        }
    }

//creacion de instancia 
const puntoA = { x: 1, y: 2 }; //const para declarar, pudes cambiar sus propiedades pero no la referencia al objeto
const puntoB = { x: 7, y: 12 };
const puntoC = { x: -5, y: -5 };
//instancia de la clase, propiedades propias y metodos basados en la clase
const dist = new Distancia(puntoA, puntoB);
