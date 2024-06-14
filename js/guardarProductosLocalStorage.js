//funcion para leer archivo json
function leerArchivoJson(ubicacionArchivo, nombreVariableLocalStorage){

    fetch(ubicacionArchivo)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (this.localStorage.getItem(nombreVariableLocalStorage)==null){         
            localStorage.setItem(nombreVariableLocalStorage, JSON.stringify(data));
        }
        

    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

leerArchivoJson('../js/productosPrincipales.json', 'productosPrincipales')

