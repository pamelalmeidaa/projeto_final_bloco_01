import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";
import { LivroDeficcao } from "./src/model/LivroDeFiccao";
import { LivroDeNãoFiccao } from "./src/model/LivroNaoFiccao";


export function main() {

    let opcao: number;
    const l1: LivroDeficcao = new LivroDeficcao(1, "Ps Eu te Amo", 1, 45, "Romance");
    l1.visualizar();  
    const l2: LivroDeNãoFiccao = new LivroDeNãoFiccao(2, "O poder do Hábito", 2, 60, "Autoajuda");
    l2.visualizar();  

    while (true) {

        console.log(colors.bg.blue, colors.fg.gray,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                Livraria Sonhos                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar todos os Produtos             ");
        console.log("            2 - Listar Produto pelo ID               ");
        console.log("            3 - Cadastrar Produto                    ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(colors.fg.greenstrong,
                "\nLivraria Sonhos - Todas as opções de livros em um só lugar!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        console.log(colors.fg.whitestrong)

        switch(opcao){
            case 1:
                console.log("\n\nCadastrar Produto\n\n")

                keyPress()
                break
            case 2: 
                console.log("\n\nListar todos Produtos\n\n")

                keyPress()                
                break
            case 3:
                console.log("\n\nBuscar produto por ID\n\n")
                keyPress()
                break
            case 4:
                console.log("\n\nAtualizar Produto\n\n")

                keyPress()
                break
            case 5:
                console.log("\n\nApagar Produto\n\n")

                keyPress()
                break

            default:
                console.log(colors.fg.red)
                console.log("\n\nOpção Inválida!\n\n")
                console.log(colors.reset)
                keyPress()
        }


    }
}


/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Pamela Salgado");
    console.log("E-mail - contatopamela@outlook.com");
    console.log("https://github.com/pamelalmeidaa");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();