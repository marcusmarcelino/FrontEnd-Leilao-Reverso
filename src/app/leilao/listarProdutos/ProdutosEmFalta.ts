export class ProdutosEmFalta {
    public id : number;
    public nome : string;
    public categoria : string;
    public qtdSugCompra : number;
	public precoCustoMedioProd : string;

	
    constructor(
	id: number, 
	nome: string,  
	categoria: string,
	qtdSugCompra: number,
	precoCustoMedioProd: string
	) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.qtdSugCompra = qtdSugCompra;
        this.precoCustoMedioProd = precoCustoMedioProd;
    }
}