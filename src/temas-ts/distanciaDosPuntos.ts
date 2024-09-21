export class Distancia { //export para poder usar en otro lado la clase
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    distancia: number;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.distancia = 0;
    }

    public calcularD(x1:number, x2:number, y1:number, y2:number) {
        const r1 = x2 - x1;
        const r2 = y2 - y1;
        this.distancia = Math.sqrt(r1 * r1 + r2 * r2);
        return this.distancia;
    }
    
    imprimir(): void{
        console.log(`DISTANCIA ENTRE DOS PUNTOS`);
        console.log(`La distancia del Punto A al punto B es :${dist.calcularD(this.x1, this.x2, this.y1, this.y2)}`);

        }
    }

//creacion de instancia para los dos puntos
const puntoA = { x1: 1, y1: 2 }; //const para declarar, pudes cambiar sus propiedades pero no la referencia al objeto
const puntoB = { x2: 7, y2: 12 };

//instancia de la clase, propiedades propias y metodos basados en la clase
const dist = new Distancia(puntoA.x1, puntoA.y1, puntoB.x2, puntoB.y2);
// dist.imprimir();