import { ProdutoRepository } from './src/repository/ProdutoRepository';
import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";
import { LivroDeficcao } from "./src/model/LivroDeFiccao";
import { LivroDeNãoFiccao } from "./src/model/LivroNaoFiccao";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Produto } from './src/model/Produto';


export function main() {

    let opcao, id, tipo, preco: number;
    let nome, livro1,livro2: string;
    let tipoProduto = ['Livro de Ficção', 'Livro de Não Ficcção'];
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
        console.log("            1 - Listar todos os Produto             ");
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
                "\a Sonhos - Todas as opções de livros em um só lugar!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        console.log(colors.fg.whitestrong)

        switch(opcao){
            case 1:
                case 1:
                    console.log(colors.fg.whitestrong, "\n\nListar todos os Produto\n\n", colors.reset);
                    ProdutoController.listartodas(); 
                    keyPress();
                    break;
            case 2: 
                    console.log(colors.fg.whitestrong, "\n\nListar por ID\n\n", colors.reset);
                    let id = prompt("Digite o ID do produto:") || "";
                    ProdutoController.procurarPorID(id);
                    keyPress();
            break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nCriar Produto\n\n", colors.reset);
            
                const nome = readlinesync.question("Digite o nome do Autor: ");
                const tipo = readlinesync.keyInSelect(["Livro de Ficção", "Livro de Não Ficção"], "Escolha o tipo de produto: ", { cancel: false }) + 1;
                const preco = readlinesync.questionFloat("Digite o preço: ");
            
                switch (tipo) {
                    case 3:
                        console.log("Digite o título do livro de ficção: ");
                        const tituloFiccao = readlinesync.question("");
            
                        const livroFiccao = new LivroDeficcao(
                            ProdutoController.gerarNumero(),  nome,  tipo,  preco, tituloFiccao );
            
                        ProdutoController.cadastrar(livroFiccao);
                        break;
            
                    case 2:
                        console.log("Digite o título do livro de não ficção: ");
                        const tituloNaoFiccao = readlinesync.question("");
            
                        const livroNaoFiccao = new LivroDeNãoFiccao(
                            ProdutoController.gerarNumero(), nome, tipo, preco, tituloNaoFiccao );
            
                        ProdutoController.cadastrar(livroNaoFiccao);
                        break;
            
                    default:
                        console.log("Opção inválida.");
                        break;
                }
                case 4:
    console.log(colors.fg.whitestrong, "\n\nAtualizar Produto\n\n", colors.reset);

    const idProdutoAtualizar = readlinesync.questionInt("Digite o Id do Produto que deseja atualizar: ");

    const produtoAtualizar = ProdutoController.procurarPorID(idProdutoAtualizar);
    if (produtoAtualizar) {
        console.log("Produto encontrado:");
        produtoAtualizar.visualizar();

        const novoNome = readlinesync.question("Digite o novo nome do Autor (deixe em branco para manter o mesmo): ");
        const novoPreco = readlinesync.questionFloat("Digite o novo preço (deixe em branco para manter o mesmo): ");

        if (novoNome !== "") {
            produtoAtualizar.nome = novoNome;
        }
        const newLocal = tipoProduto.length > 0; 
        if (newLocal) {
            produtoAtualizar.preco = novoPreco;
        }

        ProdutoController.atualizar(produtoAtualizar);
    } else {
        console.log("Produto não encontrado!");
    }

            
                keyPress();
                break;            
                    case 5:
                        console.log(colors.fg.whitestrong, "\n\nDeletar produto\n\n", colors.reset);
                    
                        const idProduto = readlinesync.questionInt("Digite o Id do Produto: "); 
                        ProdutoController.deletar(idProduto.toString()); 
                    
                        keyPress();
                        break;
                    default:
                    console.log(colors.fg.whitestrong,
                        "\nOpção Inválida!\n", colors.reset);
    
                    keyPress()
                    break;
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