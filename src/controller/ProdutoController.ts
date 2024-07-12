import { LivroDeficcao } from "../model/LivroDeFiccao";
import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
     static atualizar(produtoAtualizar: any) {
         throw new Error('Method not implemented.');
     }
     static deletar(id: string) {
         throw new Error('Method not implemented.');
     }
     static listartodas() {
         throw new Error('Method not implemented.');
     }
     static cadastrar(livroFiccao: any) {
         throw new Error('Method not implemented.');
     }
     static gerarNumero(): any {
         throw new Error('Method not implemented.');
     }
     static procurarPorID: any;
     procurarPorID(id: number): void {
          throw new Error("Method not implemented.");
     }

     // Coleção Array que vai armazenar os Objetos Produto
     private listaProdutos: Array<Produto> = new Array<Produto>();

     // Controlar os Números das Produtos
     public id: number = 0;
     
     procurarPorId(id: number): void {
          let buscaProduto = this.buscarNoArray(id);

          if (buscaProduto !== null)
               buscaProduto.visualizar();
          else
               console.log("\nO Produto não foi encontrado!");
     }

     listarTodas(): void {
          for (let produto of this.listaProdutos) {
               produto.visualizar()
          }
     }

     cadastrar(produto: Produto): void {
          this.listaProdutos.push(produto);
          console.log("\nO Produto foi cadastrada com sucesso!")
     }

     atualizar(produto: Produto): void {
          let buscaProduto = this.buscarNoArray(produto.id);

          if (buscaProduto !== null) {
               this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
               console.log("\nO Produto foi atualizado!")
          } else
               console.log("\nO Produto não foi encontrado!");
     }

     deletar(id: number): void {
          let buscaProduto = this.buscarNoArray(id);

          if (buscaProduto !== null) {
               this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
               console.log("\nO Produto foi excluído!")
          } else
               console.log("\nO Produto não foi encontrado!");
     }

     // Métodos Auxiliares

     public gerarId(): number {
          return ++ this.id;
     }

     public buscarNoArray(id: number): Produto | null {

          for (let produto of this.listaProdutos) {
               if (produto.id === id)
                    return produto;
          }

          return null;
     }
     }