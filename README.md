-contato: jefersonpereira1331@gmail.com || @jeferson_souuza no instagram


Essa é uma versão minha da calculadora feita com HTML, CSS e javaScript puro como forma
de estudos.
Não sei se foi a melhor maneira de fazer isso mas com os meus conhecimentos atuais foi
o que consegui fazer.

A seguir vou explicar a lógica pensada para realização do projeto, deixando de lado a 
explicação do uso do html e css, por se tratarem de coisas básicas. Sinta-se livre 
para sugerir melhorias apontar os erros cometidos para que eu possa evoluir como dev.

-INPUT
Meu primeiro desafio foi conseguir uma forma de fazer com que os digitos clicaveis 
fossem adicionados a uma só variavel para poder realizar as operações.

Por se tratarem de botões independentes que podem ser clicados em qualquer ordem
e não uma caixa de texto, não consegui pensar numa forma de adicionar os valores
em uma unica string ou number.
A maneira que consegui pensar para fazer isso dar certo foi um pouco estranha 
e suspeito que não é a maneira mais correta de se fazer isso, mas vamos lá:
Primeiramente fiz com que cada valor selecionado fosse armazenado em uma 
posição de um array, fazendo com que cada número chamasse uma função que 
adicionaria o número determinado atraves do array.push('número').
Depois de adicionados eu inverti as posições dos indices e, através de um
for, multipliquei cada indice por uma variavel que comecaria com 1 e a 
cada repetição se multiplicaria por 10, para fazer com que o primeiro 
valor se referisse à unidade, o segundo à dezena, o terceiro à centena, etc.
E por último, foi só somar cada indice desse array para obter o valor em 
uma única variavel.
Fazendo a mesma coisa para o segundo valor era só chamar a função da operação 
escolhida. Isso levou ao segundo desafio: as operações.

-OPERAÇÕES
Nessas parte eu tive um problema porque a maneira que normalmente efetuamos 
a operação é: escoler o primeiro número; escolher a operação; escolher o
segundo número; efetuar a operação.
Para seguir essa estrutura eu não pude fazer com que a operação fosse 
escolhida por ultimo, mas também não pude não pude chamar a operação 
logo quando ela fosse escolhida, porque ainda faltava o segundo numero.
A maneira que consegui contornar isso foi fazer uma variavel que ia 
receber uma string com o nome da operação escolhida (somar, dividir, etc),
e na hora de selecionar o sinal de igual, essa função ia verificar qual 
o valor da variavel e chamar uma função dependendo do valor, Ex: 
if (variavel == 'somar' ) { somar(valor1, valor2) }, etc. dessa forma, 
a operação pode ser escolhida antes e só ser efetuada depois.

-RESULTADO
Essa parte que é simples de se fazer, estranhamente foi a que me resultou 
maior dor de cabeça. O que era pra ser simples como colocar uma id="id"
no elemento do visor; usar o var nomevar = document.getElementById('id')
para pegar esse elemento; e usar o nomevar.innerHTML = resultado para 
modifica-lo para mostrar o resultado da operação, acabou se tornando 
um pesadelo quando o document.getElementById sempre retornava null,
indicando que não existia um elemento com a id identificada (e 
definitivamente existia). Depois de muita dor de cabeça achando que
tinha digitado algum comando errado, acabei descobrindo que o 
problema era algo simples e óbvio que eu ainda não descoberto e
era só mudar uma linha de lugar para funcionar perfeitamente.
Acontece que o código js tentava pegar o elemento pela id assim 
que era carregado, só que o link para o script.js era chamado de eu 
declarar a id do elemento no arquivo html, Ou seja, o script 
tentava chamar algo que ainda não existia e retornava null porque não
tinha achado. 
Resolver isso foi simplismente mover a linha que chamava o script para o 
final da tag /body, assim a todas as id's iam ser declaradas antes de serem 
procuradas.

-ERROS
Acho que essa é a parte mais importante por que mostra o que eu não sou capaz 
de fazer com o conhecimento atual e me da uma direção do que procurar aprender.
1- Eu queria fazer com que os numeros aparecessem na tela à medida que fossem 
digitados, para isso eu chamei a função que mostraria o numero no final 
em cada numero digitado, mas isso deu errado, os numeros eram somados antes da
hora comprometendo o resultado inutilizando o objetivo principal.
2-Não adicionei um botão para reiniciar a calculadora, sendo necessario atualizar
a página para fazer outra operação.
3-O código ficou funcional, mas mal organizado e eu imagino que ficou com muitas 
linhas a mais do que o necessario.