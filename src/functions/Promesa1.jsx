function Promesa1(){
    console.log("Hola mundo");
    function fcnSumarUno(numero, fcnResultadoCallBack){
        setTimeout (function(){
           //return numero + 1;
        fcnResultadoCallBack (numero+1);
    },800); 
    };
   //return numero + 1;
    console.log("Programa de Funciones"); 
    fcnSumarUno (5,function(nuevoValor1){
        console.log("Resultado: ", nuevoValor1);
    });

    
    //let Resultado = fcnSumarUno(5);
    //console.log(Resultado);
    return(
        <>
        <div>
            <h1>Programa de promesas</h1>
        </div>
        </>
    );                                       
}


export default Promesa1;