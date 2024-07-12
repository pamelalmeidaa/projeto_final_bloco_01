import { Produto } from "../model/Produto";

export interface ProdutoRepository{

    // Métodos do CRUD

    procurarPorID(id: number): void;
    listarTodas(): void;
    cadastrar(Produto: Produto): void;
    atualizar(Produto: Produto): void;
    deletar(id: number): void;
    


}