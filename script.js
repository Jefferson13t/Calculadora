let Pval = []; //array que armazena os numeros digitados do primeiro valor
let Pval2 = []; //array que armazena os numeros digitados do segundo valor
let pvalue = []; //recebe os valores de Pval invertidos e multiplicados por 10
let pvalue2 = []; //recebe os valores de Pval2 invertidos e multiplicados por 10
let j; //fator que multiplica o Pval e Pval 2 (invertidos) por 10 a cada loop para formar as casas de unidade, dezena e centena
let x = 0; // recebe os termos de Pval somados para formar um só numero 
let y = 0; // recebe os termos de Pval2 somados para formar um só numero
let contrl = 0; // variavel de controle para alternar entre X e Y
let op; //variavel para selecionar a operação matematica

//pega os elementos do HTML
let val1 = document.getElementById("val1")
let val2 = document.getElementById("val2")
let resul = document.getElementById("resul")


//efetua a operação
function somar(a, b) {
    return a + b
}
function subtrair(a, b) {
    return a - b
}
function multiplicar(a, b) {
    return a * b
}
function dividir(a, b) {
    return a / b
}

//muda da variavel x para y
function mudar() {
    contrl = 1
}

//seleciona a operação
function mais() { 
op = 'mais'
    mudar()
}
function menos() { 
    op = 'menos'
    mudar()  
}
function vezes() { 
    op = 'vezes'
    mudar()
}
function divisao() { 
    op = 'dividir'
    mudar()
}



//adiciona valores ao array
function um() {
    if (contrl == 0) {
        Pval.push(1)
    } else {
        Pval2.push(1)
     
        }    

} 
function dois() {
    if (contrl == 0) {
        Pval.push(2)
    } else {
        Pval2.push(2)
    }
    } 
function tres() {
    if (contrl == 0) {
        Pval.push(3)
     } else {
        Pval2.push(3)
     
     }} 
function quatro() {
    if (contrl == 0) {
        Pval.push(4)
     } else {
        Pval2.push(4)
     }
    } 
function cinco() {
    if (contrl == 0) {
        Pval.push(5)
     } else {
        Pval2.push(5)
     }
    } 
function seis() {
    if (contrl == 0) {
        Pval.push(6)
     } else {
        Pval2.push(6)
     }
    }
function sete() {
    if (contrl == 0) {
        Pval.push(7)
     } else {
        Pval2.push(7)
     }
    } 
function oito() {
    if (contrl == 0) {
        Pval.push(8)
     } else {
        Pval2.push(8)
     }
    } 
function nove() {
    if (contrl == 0) {
        Pval.push(9)
     } else {
        Pval2.push(9)
     }
    }
function zero() {
    if (contrl == 0) {
        Pval.push(0)
     } else {
        Pval2.push(0)
     }
    }

//apaga o ultimo valor
function apagar() {
    if(contrl == 0){
     Pval.pop()   
    } else {
     Pval2.pop()   
    }

}
function igual() {
    num()
    if (op == 'mais'){
        console.log(somar(x, y))
        resul.innerHTML = somar(x, y)
    }
    if (op == 'menos'){
        console.log(subtrair(x, y))
        resul.innerHTML = subtrair(x, y)

    }
    if (op == 'vezes'){
        console.log(multiplicar(x, y))
        resul.innerHTML = multiplicar(x, y)

    }
    if (op == 'dividir'){
        console.log(dividir(x,y))
        resul.innerHTML = dividir(x, y)

    }
} 

// inverte e multiplica os termos do array
function inv() {
Pval.reverse()
j = 1;
for (i=0; i < Pval.length; i ++) {

    if (Pval[i] != Pval[0] && Pval[i] == '0'){
        pvalue[i] = 0
    } else {
           pvalue[i] = Pval[i] * j
    }
    
j = j * 10
}

}
function inv2() {
Pval2.reverse()
j = 1;
    for (i=0; i < Pval2.length; i ++) {

    if (Pval2[i] != Pval2[0] && Pval2[i] == '0'){
        pvalue2[i] = 0
    } else {
           pvalue2[i] = Pval2[i] * j
    }
    
j = j * 10
}
}

//soma os termos transformando-os em um unico numero
function num() {
inv()
inv2()

for (i=0; i < pvalue.length; i++) {

x = x + pvalue[i]

}
for (i=0; i < pvalue2.length; i++) {
y = y + pvalue2[i]    
}

// mostra o numero no console
console.log(x)
console.log(y)
val1.innerHTML = x;
val2.innerHTML = y;

}
console.log(Pval)
console.log(Pval2)
console.log(pvalue)
console.log(pvalue2)