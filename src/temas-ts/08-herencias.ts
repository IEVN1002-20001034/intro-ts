class Persona3{//privado y protegido, por defecto publico 
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string,edad:number){//incializa el valor cuando hace la instancia de el
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log("Nombre: "+this.nombre+" Edad: "+this.edad);
    }
}

class Empleado extends Persona3{//herencia de persona3, extends
    private sueldo:number;
    constructor(nombre:string,edad:number,sueldo:number){
        super(nombre,edad);//funcion super, se pasa hasta el padre de la herencia.
        this.sueldo=sueldo;
    }
    imprimir(): void {
        console.log(`Sueldo ${this.sueldo}`)
    }
    pagaImpuesto(){
        if(this.sueldo > 5000)
            console.log(`${this.nombre} debe pagar impuestos`);
        else
        console.log(`${this.nombre} no debe pagar impuestos`)
    }
}
const persona3=new Persona3('Luciana',44);
persona3.imprimir();

const empleado1=new Empleado('Dianaa',22,7000)
empleado1.imprimir();
empleado1.pagaImpuesto();

//Herencia > utilizar propiedades y metodos de una clase, reciclar codigo