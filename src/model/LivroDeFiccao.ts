import { Produto } from "./Produto";

export class LivroDeficcao extends Produto{
    private _categoria: string;

	constructor(id: number, nome:string, tipo: number, preco: number, categoria: string) {
        super(id, nome, tipo, preco);
		this._categoria = categoria;
	}


	public get categoria(): string {
		return this._categoria;
	}

	public set categoria(value: string) {
		this._categoria = value;
	}
    public visualizar(){
        super.visualizar();
        console.log(`\Categoria: ${this._categoria}`);
    }

}