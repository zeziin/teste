var readlineSync = require('readline-sync');
var data_atual = new Date();
valido = 1

// Comeco do evento
console.log("Bem vindo")

// Verifica se a data programada é valida
do {
    console.log("Entre com a data programada do evento: ")

    var data_programada = readlineSync.question("Ultilize o formato dd/mm/aaaa hh:mm:ss: ");
    data_programada = new Date(data_programada)

    // Verificar se a data é valida ( data do evento não pode ser antes da data atual )
    var retorno = comparaDatas(data_programada,data_atual)

    // Se o retorno for menor que 0 quer dizer que a data programada é anterior ao dia do evento
    if (retorno < 0) {
        console.log("Data invalida entre com uma data futura");
        valido = 0
    }else{
        valido = 1
    }

    // Data de nascimento 

} while (valido == 0); 

function comparaDatas(dataInicial, dataFInal) {
    var resultado = dataInicial.getTime() - dataFInal.getTime()
    return resultado;
}

var idade = readlineSync.question("insira a idade: ");

    if (idade => 18) {
        var evento_nome = readlineSync.question("insira a nome do evento: ");
        var evento_palestrante = readlineSync.question("insira o nome do palestrante: ");
        var contador = 0
        var continuar = 0
        var nomes = [];
        var limite = 3;

        while(contador < limite && continuar == 0){

            nomes.push(readlineSync.question("insira o nome: ")) 
            contador = contador + 1

            if(contador < limite){ 
                console.log("deseja continuar: ")
                var aux = readlineSync.question("responda como 0 para nao e 1 para sim: ")
                if(aux==0){
                    continuar=1
                }
            }
                
            else if(contador == limite){ 
                    console.log("limite de pessoas atingido")
            }
        }
        
        console.clear()
        console.log("Evento: ",evento_nome)
        console.log("---------------------------------------------------------------------------")
        console.log("Palestrante: ",evento_palestrante)
        console.log("---------------------------------------------------------------------------")
        for(var i = 0; i < contador; i++) {console.log("Participantes: ",nomes[i])}
        console.log("---------------------------------------------------------------------------")
    }
else{
        console.log("idade invalida")
        console.log("fim")
    }
