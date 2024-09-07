

interface Alumno{
    nombre: string;
    edad:number;
    apellido:string;
    curso:string|number;
    direccion?:string; //campo opcionar
}

const alumno:Alumno={ //si se usa la interfaz se deben de usar todos los campos que usa la interfaz
    nombre:"diana",
    apellido:"funes",
    edad:21,
    curso:"ingles",
  
}

console.table(alumno)

let mascotas=['perro', 'gato','perico'];
console.log(mascotas[0]);
mascotas[1]='nuevo gato'; //sobreescribir el elemento
mascotas.push('tortuga'); //agregar elemento

console.log(mascotas)

//arreglo vacio
let tem:(number|string)[]=[]
tem.push(1);
tem.push('dos');
console.log(tem)