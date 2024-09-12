function PromesaBasica() {
    console.log("Programa de funciones");

//    function fcnSumarUno(numero) {
//        return numero + 1;
//    }
    
//    let resultado = fcnSumarUno(5);
//    console.log(resultado);

//    fcnSumarUno(5, function(nuevoValor1) {
//    console.log("Resultado:", nuevoValor1);
// });

//    fcnSumarUno(5, function(nuevoValor1) {
//    fcnSumarUno(nuevoValor1, function(nuevoValor2) {
//        fcnSumarUno(nuevoValor2, function(nuevoValor3) {
//            console.log("Resultado:", nuevoValor3);
//        });
//   });
//});

    function fcnSumarUno(numero) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(numero + 1);
            }, 800);
        });
    }

    fcnSumarUno(5)
    .then(nuevoValor1 => {
        console.log("Resultado:", nuevoValor1);
        return fcnSumarUno(nuevoValor1);
    })
    .then(nuevoValor2 => {
        console.log("Resultado:", nuevoValor2);
        return fcnSumarUno(nuevoValor2);
    })
    .then(nuevoValor3 => {
        console.log("Resultado:", nuevoValor3);
    });




    return (
        <>
            <div>
                <h1>Programa de promesas basicas</h1>
            </div>
        </>
    );
}

export default PromesaBasica;
