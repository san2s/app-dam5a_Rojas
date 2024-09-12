function MyPromises() {
    //FIC: funcion que recibe un nuemero y le suma uno.
    function fcnSumarUno( numero ){
        var promesa = new Promise(function(resolve, reject){
            if (numero >= 7 ){
                reject('El numero ya es muy alto');
            }
            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
    return promesa;
    };
    //FIC: funcion normal que regresa una promesa
    //pero el resultado se obtiene mas lento.
    function fcnSumarLento( numero ){
        /* var promesa = new Promise(function(resolve, reject){
        });
        return promesa; */
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
    };
   
    //FIC: esta es la manera mas optimizada de definir
    //una funcion pero de tipo arrow (flecha) que
    //tambien regresa una promesa pero el resultado
    //se obtiene mas rapido.
    let fcnSumarRapido = (numero)=>{
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve( numero + 1 );
                }, 300);
        });
    };
    //FIC: llamado normal de la funcion sumar lento y su promesa.
    fcnSumarLento(5)
    .then(respuesta=>{
        console.log('Respuesta Lenta:', respuesta);
    });
    //FIC: llamado normal de la funcion sumar rapido y su promesa.
    fcnSumarRapido(10)
    .then(respuesta=>{
        console.log('Respuesta Rapida:', respuesta);
    });
    //FIC: llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
    // Promise.all([fcnSumarLento(5), fcnSumarRapido(10)])
    // .then(respuestas =>{
    //    console.log('Respuestas:', respuestas);
    // });
    let arregloVarios = [fcnSumarLento(5), fcnSumarRapido(10), true, '¡Hola Mundo!'];
    //FIC: llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
    Promise.all(arregloVarios)
    .then(respuestas =>{
        console.log('Respuestas:', respuestas);
    })
    .catch(error=>{
        console.log("Error en todas las promesas: ", error);
    });
    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas ALL
                </h1>
            </div>
       
        </>
    );
};
export default MyPromises;

