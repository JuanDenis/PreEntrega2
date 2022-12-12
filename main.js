let usuario = prompt("Ingrese el nombre de Usuario: (EntregaCoder)");
const contraseniaAutorizada = 1234;

//Función bienvenida (Nombre Usuario y Contraseña)
function bienvenida() {
    if (usuario === "EntregaCoder") {
        for (let i = 0; i < 2; i++);
        let contraseniaUsuario = parseInt(prompt("Ingrese su contraseña: (1234)"));
        if(contraseniaUsuario === contraseniaAutorizada) { 
            alert("Bienvenido " + usuario + "!");
            menu(); 
        } else {
            contraseniaUsuario = prompt("Contraseña incorrecta, vuelta a intentarlo");
        } 
    } else {
        alert("Verifique el nombre de Usuario e intente nuevamente");
    }
}

//Clase Productos
class Productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = Math.round(precio * 1.21.toFixed(0));
    }
}

//Productos
const pan = new Productos ("Pan", 61);
const azucar = new Productos ("Azucar", 45);
const arroz = new Productos ("Arroz", 67);
const gaseosa = new Productos ("Gaseosa", 100);
const yerba = new Productos ("Yerba", 127);

// Array
const arrayProductos = [];

//Pusheo productos
arrayProductos.push(pan);
arrayProductos.push(azucar);
arrayProductos.push(arroz);
arrayProductos.push(gaseosa);
arrayProductos.push(yerba);

console.log(arrayProductos);

// Función menú 
function menu() {
    let menu = parseInt(prompt("Que desea hacer? \n 1) Comprar Productos \n 2) Buscar Productos \n 3) Productos por menos de $90 \n 4) Salir")); 
    switch(menu){
        case 1: 
                menuProductos();
                break;
        case 2:
                buscarProducto();
                break;
        case 3:
                productosBaratos();
                break;
        case 4:
                salir();
                break;
        default:
            alert("La opción no es correcta!");
    }
}

//Función buscar productos

function buscarProducto(){
    let buscar = prompt("Ingrese el nombre de un producto: ");
    let producto = arrayProductos.find(producto => producto.nombre === buscar);
    if (buscar === producto.nombre) {
        alert("Se encontró el producto: " + producto.nombre + "\nSu precio es de: " + producto.precio);
    } else {
        alert("No se encontró el producto");
    }
    console.log(producto);
}

//Función presupuesto

function productosBaratos(){
    const arrayProductosBaratos = arrayProductos.filter(producto => producto.precio < 90);
    console.log("Productos por menos de $90");
    console.log(arrayProductosBaratos);
}

//Función salir
function salir() {
    alert("Que tenga un buen día!");
}

//Función menú de productos
function menuProductos() {
   let opciones = prompt("Seleccione una opción con su valor correspondiente: \n 1) Pan \n 2) Azucar \n 3) Arroz \n 4) Gaseosa \n 5) Yerba");
   switch(opciones){
         case "1":
             alert("Seleccionaste: " + pan.nombre + " $" + pan.precio + " iva incluido");
             arrayProductos.shift(0);
             console.log(arrayProductos);
             alert("Gracias por su compra que tenga un buen día!");
             break;

        case "2":
            alert("Seleccionaste: " + azucar.nombre + " $" + azucar.precio + " iva incluido");
            arrayProductos.shift(1);
            console.log(arrayProductos);
            alert("Gracias por su compra que tenga un buen día!");
            break;

        case "3":
            alert("Seleccionaste: " + arroz.nombre + " $" + arroz.precio + " iva incluido");
            arrayProductos.shift(2);
            console.log(arrayProductos);
            alert("Gracias por su compra que tenga un buen día!");
            break;

        case "4":
            alert("Seleccionaste: " + gaseosa.nombre + " $" + gaseosa.precio + " iva incluido");
            arrayProductos.shift(3);
            console.log(arrayProductos);
            alert("Gracias por su compra que tenga un buen día!");
            break;

        case "5":
            alert("Seleccionaste: " + yerba.nombre + " $" + yerba.precio + " iva incluido");
            arrayProductos.shift(4);
            console.log(arrayProductos);
            alert("Gracias por su compra que tenga un buen día!");
            break;
        
        default:
            alert("La opción ingresada no es válida");
      }
}

bienvenida();