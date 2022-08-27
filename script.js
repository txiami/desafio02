// Questão 02 - Bhaskara
// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 

// Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

// Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.

// Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

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