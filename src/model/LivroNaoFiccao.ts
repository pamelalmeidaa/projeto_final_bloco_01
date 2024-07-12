import { Produto } from "./Produto";

export class LivroDeNãoFiccao extends Produto{
    private _tipoLivro: string;

	constructor(id: number, nome:string, tipo: number, preco: number, categoria: string) {
        super(id, nome, tipo, preco);
		this._tipoLivro = categoria;
	}


	public get categoria(): string {
		return this._tipoLivro;
	}

	public set categoria(value: string) {
		this._tipoLivro = value;
	}
    public visualizar(){
        super.visualizar();
        console.log(`\Tipo de Livro: ${this._tipoLivro}`);
    }

}