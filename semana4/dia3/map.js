// array of objects from places
const places = [
    {
      name: "Tecsup",
      location: "San Salvador",
    },
    {
      name: "Codigo Facilito",
      location: "Lima",
    },
    {
      name: "Platzi",
      location: "Bogota",
    },
  ];
  
  places.map((place) => {
    console.log(place.name);
  });
  
  //* veamos el return en el map
  const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const operacionProducto = numeritos.map((numerito) => {
    //* el map tiene la propiedad de retornar valores en cada iteracion
    return numerito * 2;
  });
  
  // cual es el valor de operacionProducto
  // [2, 4, 6.. 20]
  console.log(operacionProducto);
  
  // const productos = [
  //   {
  //     name: "Laptop",
  //     price: 1500,
  //   },
  //   {
  //     name: "Celular",
  //     price: 2300,
  //   },
  //   {
  //     name: "Monitor",
  //     price: 1000,
  //   },
  // ];
  //* reto => quiero modificar el precio al doble
  const preciosCyberWow = productos.map((producto) => {
    // en cada vuelta el elemento modificalo por este return
    // producto =  { name: "Laptop", price: 1500 }
    return {
      name: `Cyberwow ${producto.name}`,
      price: producto.price * 5,
    };
  });
  
  console.log("preciosCyberWow", preciosCyberWow);
  
  // creemos un array de numeros y luego calculemos el cubo de cada numero
  // y hay que guardarlo en una variable
  
  const numerosCuadrados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const resultado = numerosCuadrados.map((numero) => {
    // como es solo una linea se podria usar una funcion inline
    return Math.pow(numero, 3);
  });
  
  console.log(resultado);
  // [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]
  const resultado2 = numerosCuadrados.map((numero) => Math.pow(numero, 3));
  console.log(resultado2);
  
  
  //* Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.

  const imprimirTable = (numero) => {
    // es instancia esta creando un array vacion con 10 elementos
    const arrayDiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    arrayDiez.map((table, index) => {
      console.log("producto", numero * (index + 1));
    });
  };
  
  imprimirTable(10);

  
  