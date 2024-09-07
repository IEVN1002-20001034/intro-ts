//funcioenes 
function sumar(){
    var num1 = 6;
    var num2 = 5;
    var resultado = num1 + num2;
    console.log(`El resultado es: " + ${resultado}`);
}

//funcion con parametros, se usa return por que regresa un valor
function restar(a:number, b:number):number{ //resgresa un numero, el tipo de dato que regresa despues de:
    return a-b;
}
//uso de la funcion restar
const res=restar(10,2);
console.log(res)

//interface con parametros: variables, metodos, no se desarolla la funcion solo de nombra.
interface Mascota{
    nombre: string;
    edad: number;
    mostrarEdad:()=>void; //void no regresa nada
}

function calcular(mascota:Mascota, x:number): void{
    mascota.edad+=x;
    console.log(mascota);
    console.log(mascota.mostrarEdad());
}


//creaer objeto que usa la funcion
const nuevaMascota:Mascota={
    nombre:"Luna",
    edad: 1,
    mostrarEdad()
    {
        console.log(`La edad de ${nuevaMascota.nombre} es ${this.edad}`) //this, hace referencia a las variables que usa la funcion actual
    }
}

//llamar la funcion, con el objeto y el valor que se requiere
calcular(nuevaMascota,4)