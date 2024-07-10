//funcion para leer un json con los productos 
function leerArchivoJson(ubicacionArchivo, nombreVariableLocalStorage, tipo){

    fetch(ubicacionArchivo)
    .then(response => response.json())
    .then(data => {
  
        if ( localStorage.getItem(nombreVariableLocalStorage)==null){         

            localStorage.setItem(nombreVariableLocalStorage, JSON.stringify(data));
        }

    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }
  
//   leerArchivoJson('../js/productosPrincipales.json', 'productosPrincipales', 'principal')
//   leerArchivoJson('../js/productosPrincipales.json', 'productosVarios', 'varios')
  leerArchivoJson('../js/usuarios.json', 'usuarios')

