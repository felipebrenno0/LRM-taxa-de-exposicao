## Projeto LRM-taxa-de-exposicao

Site feito para calcular as medições realizadas no **Levantamento Radiometrico na cabine dos caminhões - Metodo taxa de exposição**

## Resumo do funcionamento do código

1. Ao inserir as medições e apertar o botão calcular, será chamada a função **ativarBotao( )**.
2. A função **ativarBotao( )** irá declarar uma constante chamada **medicoes** que irá receber a função **obterTaxas( )**.
3. **obterTaxas( )** irá pegar os valores declarados na constante **taxaPassagem**, transformar em um array com todas as 5 medições, somar tudo utilizando **reduce** e retornar esse valor.
4. Após isso a função **ativarBotao( )** irá declaras a constante **taxaExposicao** com a chamada de função **calcularTaxa( )** adicionada da constante **medicoes**. Da seguinte forma **calcularTaxa(medicoes)**.
5. **calcularTaxa( )** irá declarar a constante **taxaMedia** recebendo **medicoes**, dividir por 5, multiplicar pelo tempo de inspeção e dividir esse valor por 3600.
6. Em seguida irá chamar a função **imprimirTaxa( )** que receberá a constante **taxaExposicao**.
7. **imprimirTaxa( )** vai coferir se falta preencher alguma passagem, se estiver tudo ok ela irá imprimir o valor da taxa de exposição.



## Para acessar o site [clique aqui](https://felipebreno.site/taxa-de-exposicao/)
