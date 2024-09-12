//funciones ->capacidad de regresar un valor 

export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'Sony Erickson',
    precio:500
}

const tablet: Producto={
    desc:'Samsung',
    precio:7642
}

//funcion recibe un areglo con objetos
//regresa un numero
function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio
    })
    return total*0.16;
}
const articulo1=[telefono, tablet, telefono];
const iva1=calcularIVA(articulo1)
console.log(`IVA: ${iva1}`)

// destructuracion->regrese mas de un valor
//rotorna dos valores numericos
export function calcularIVA2(productos:Producto[]):[number, number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio
    });
    return [total, total*0.16];
}
const articulo2=[telefono, tablet];
const [total, iva2]=calcularIVA2(articulo2);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva2}`);