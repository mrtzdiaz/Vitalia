//funcion para leer un json con los productos 
function leerArchivoJson(ubicacionArchivo, nombreVariableLocalStorage, tipo){
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(ubicacionArchivo, requestOptions)
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
// leerArchivoJson('../js/productosPrincipales.json', 'productosTodos', 'todos')  
leerArchivoJson("http://52.14.158.52/api/productos/", 'productosTodos', 'todos')

