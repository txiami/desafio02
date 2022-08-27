
function start(){

    const variavelA = document.getElementById("variavelA").value
    const variavelB = document.getElementById("variavelB").value
    const variavelC = document.getElementById("variavelC").value

    const delta = (Math.pow(variavelB,2)) - 4 * variavelA * variavelC

    if(delta < 0){
        alert('Delta é negativo')      
    }else{
        let resultadoPositivo = (-variavelB +(Math.sqrt(delta)))/(variavelA*2 )
        let resultadoNegativo = (-variavelB -(Math.sqrt(delta)))/(variavelA*2 )
     
        alert('PRIMEIRO RESULTADO = '+resultadoPositivo +'\nSEGUNDO RESULTADO = '+resultadoNegativo)
    }
}
