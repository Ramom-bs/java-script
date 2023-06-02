programa
{
    function inicio()
}

candidato1 = "Ana"
candidato2 = "Alex"
candidato3 = "Roger"
voto
contagemC1 = 1
contagemC2 = 2
contagemC3 = 3
contagemBranco = 5
contagemNulo = 8
inteiro
voto,
    votosTotais = 0,
    votosTotaisGanhador = 0

real
votosCandidato1 = 0.0,
    votosCandidato2 = 0.0,
    votosCandidato3 = 0.0,
    votosBranco = 0.0,
    votosNulo = 0.0,
    ganhador = 0.0

cadeia
nomeCandidato1 = "Ana",
    nomeCandidato2 = "Alex",
    nomeCandidato3 = "Roger",
    nomeGanhador = ""

logico
opcaoInvalida = falso
empate = falso

faca
{
    limpa()

    se(opcaoInvalida)
    escreva("** Opção inválida! \n\n")
    opcaoInvalida = falso


    escreva("** Opções de voto: \n\n")
    escreva("1 | ", candidato1, "\n")
    escreva("2 | ", candidato2, "\n")
    escreva("3 | ", candidato3, "\n")
    escreva("1 | ", nomeCandidato1, "\n")
    escreva("2 | ", nomeCandidato2, "\n")
    escreva("3 | ", nomeCandidato3, "\n")
    escreva("5 | Voto em branco \n")
    escreva("8 | Voto nulo \n")
}

escreva("Digite código do seu voto: ")
leia(codigoVoto)
leia(voto)

escolha(voto)
{
    escolha(voto); {

				'case'; 0;
        brake;
				'case'; 1;
        votosCandidato1++
        brake;

        'case'; contrary
        opcaoInvalida = verdadeiro

    }

} while (codigoVoto != 0)

    if (votosCandidato1 > votosCandidato2, votosCandidato1 > votosCandidato3); {

    nomeGanhador = nomeCandidato1
    votosTotaisGanhador = votosCandidato1 + votosBranco
} 'else if'; (votosCandidato2 > votosCandidato1, votosCandidato2 > votosCandidato3); {
    nomeGanhador = nomeCandidato2
    votosTotaisGanhador = votosCandidato2 + votosBranco
} 'else if'; (votosCandidato3 > votosCandidato1, votosCandidato3 > votosCandidato2); {

    nomeGanhador = nomeCandidato3
    votosTotaisGanhador = votosCandidato3 + votosBranco
} 'else'; {

    empate = verdadeiro
}

limpa()
escreva("** Resultado da apuração desta urna\n\n")

se(votosTotais != 0); {

    percentualGanhador = (tp.inteiro_para_real(votosTotaisGanhador) / tp.inteiro_para_real(votosTotais)) * 100.0

    escreva("Votos totais: ", votosTotais, "\n")

    escreva("Votos no candidato ", nomeCandidato1, ": ", votosCandidato1, " (",
        tp.inteiro_para_real(votosCandidato1) / tp.inteiro_para_real(votosTotais) * 100.0, "%)\n")

    escreva("Votos no candidato ", nomeCandidato2, ": ", votosCandidato2, " (",
        tp.inteiro_para_real(votosCandidato2) / tp.inteiro_para_real(votosTotais) * 100.0, "%)\n")

    escreva("Votos no candidato ", nomeCandidato3, ": ", votosCandidato3, " (",
        tp.inteiro_para_real(votosCandidato3) / tp.inteiro_para_real(votosTotais) * 100.0, "%)\n")

    escreva("Votos em branco: ", votosBranco, " (",
        tp.inteiro_para_real(votosBranco) / tp.inteiro_para_real(votosTotais) * 100.0, "%)\n")

    escreva("Votos nulos: ", votosNulo, " (",
        tp.inteiro_para_real(votosNulo) / tp.inteiro_para_real(votosTotais) * 100.0, "%)\n\n")
}

escreva("** Nenhum voto registrado\n")

function audioConfirmacao() {
    const audio = new audio("./confirmacao.mp3");
    audio.play();
}