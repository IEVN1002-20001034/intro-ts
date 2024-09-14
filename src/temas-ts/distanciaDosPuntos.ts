class Distancia {
    punto1: { x: number, y: number };
    punto2: { x: number, y: number };
    punto3: { x: number, y: number };
    distancia1: number;
    distancia2: number;
    distancia3: number;

    constructor(punto1: { x: number, y: number }, punto2: { x: number, y: number }, punto3: { x: number, y: number }) {
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.punto3 = punto3;
        this.distancia1 = 0;
        this.distancia2 = 0;
        this.distancia3 = 0;
    }

    public calcularD1() {
        const dx = this.punto2.x - this.punto1.x;
        const dy = this.punto2.y - this.punto1.y;
        this.distancia1 = Math.sqrt(dx * dx + dy * dy);
        return this.distancia1;
    }

    public calcularD2() {
        const da = this.punto3.x - this.punto2.x;
        const db = this.punto3.y - this.punto2.y;
        this.distancia2 = Math.sqrt(da * da + db * db);
        return this.distancia2;
    }

    public calcularD3() {
        const dz = this.punto3.x - this.punto1.x;
        const dw = this.punto3.y - this.punto1.y;
        this.distancia3 = Math.sqrt(dz * dz + dw * dw);
        return this.distancia3;
    }
}

// Ejemplo de uso:
const puntoA = { x: 1, y: 2 };
const puntoB = { x: 7, y: 12 };
const puntoC = { x: -5, y: -5 };
const dist = new Distancia(puntoA, puntoB, puntoC);
console.log(dist.calcularD1()); 
console.log(dist.calcularD2());
console.log(dist.calcularD3()); 
