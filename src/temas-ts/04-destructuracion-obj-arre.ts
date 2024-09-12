interface Reproductor{
    volumne: number;
    segundo: number;
    cancion: string;
    detalles: Detalles; //propiedad que es una interfaz/objeto
}

interface Detalles{ //objeto
    autor: string;
    year: number;
}

const reproductor:Reproductor={
    volumne: 50,
    segundo: 10,
    cancion:"little freak",
    detalles:{
        autor: "harry styles",
        year:2021
    }

/*console.log(`El volumen actual es: ${reproductor.volumne}`);
console.log(`El segundo son: ${reproductor.volumne}`);
console.log(`La cancion es: ${reproductor.volumne}`);
console.log(`el cantante es: ${reproductor.volumne}`);
console.log(`el año es: ${reproductor.volumne}`);*/

}
//desestrocturar -> llegar directamente a una propiedad, sin poner el ibjeto.
const{volumne, segundo, cancion, detalles}= reproductor;
const{autor, year} = detalles;

console.log(`Èl volumen actual es: ${volumne}`);
console.log(`El segundo son: ${segundo}`);
console.log(`La cancion es: ${cancion}`);
console.log(`el cantante es: ${autor}`);
console.log(`el año es: ${year}`);


//destructuracion de areglos
//objetos {} arreglos[]
const dbz:string[]=['Isak', 'Even', 'Sana', 'Eva'];
console.log(`Personaje 1 ${dbz[0]}`);
console.log(`Personaje 2 ${dbz[1]}`);
console.log(`Personaje 3 ${dbz[2]}`);
console.log(`Personaje 4 ${dbz[3]}`);

//entre ,, valor faltante
const[a,,b]=dbz;
console.log(`Pesonaje 1 ${a}`);
console.log(`Pesonaje 1 ${b}`);