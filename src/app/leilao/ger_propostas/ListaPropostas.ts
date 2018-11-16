export class ListaPropostas {
    public id : number;
    public nomeFornecedor : string;
    public valor : string;
    public empresa : string;
    public cnpj : string;
	public email : string;

	
    constructor( 
	nomeFornecedor: string, 
	valor: string, 
	empresa: string,
	cnpj: string,
	email: string
	) {
        this.nomeFornecedor = nomeFornecedor;
        this.valor = valor;
        this.empresa = empresa;
        this.cnpj = cnpj;
		this.email = email;
    }
}
