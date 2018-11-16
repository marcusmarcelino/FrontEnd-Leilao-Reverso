export class User {
    public tipo : string;
    public email : string;
    public senha : string;
	
    constructor( 
	tipo: string, 
	email: string, 
	senha: string
	) {
        this.tipo = tipo;
        this.email = email;
        this.senha = senha;
    }
}
