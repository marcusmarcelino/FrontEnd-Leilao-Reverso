import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ListaPropostas } from './ger_propostas/ListaPropostas';
import { Logado} from './Logado';

@Injectable()
export class LeilaoService {
	private headers = null;
    private options = null;


    constructor(private http: Http) { 
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers }); 
    }
	
	all(): Observable<any[]> {
        return this.http.get('http://localhost:3000/listaDeFaltas')
            .map(response => response.json());
    }
	
	allPropostas(): Observable<any[]> {
        return this.http.get('http://localhost:3000/listaDePropostas')
            .map(response => response.json());
    }

	find(id:number): Observable<ListaPropostas> {
        return this.http.get('http://localhost:3000/listaDePropostas/' + id)
            .map(response => response.json());
    }
	
	save(nomeFornecedor: string, valor: string, empresa: string, cnpj: string, email: string) {
        const proposta = { nomeFornecedor: nomeFornecedor, valor: valor, empresa:empresa, cnpj:cnpj, email:email };
        return this.http.post('http://localhost:3000/listaDePropostas', JSON.stringify(proposta), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
	delete(id: number) {
        return this.http.delete('http://localhost:3000/listaDePropostas/' + id, this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
	
	update(id: number, nomeFornecedor: string, valor: string, empresa: string, cnpj: string, email: string) {
        const proposta = { id: id, nomeFornecedor: nomeFornecedor, valor: valor, empresa:empresa, cnpj:cnpj, email:email };
        return this.http.put('http://localhost:3000/listaDePropostas/' + id, JSON.stringify(proposta), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
	
	findUser(email:string,senha:string): Observable<any[]> {
        return this.http.get('http://localhost:3000/usersLogin?email=' + email +'usersLogin?senha=senha+')
            .map(response => response.json());
    }
	logar(tipo: string) {
        const logado = { tipo: tipo};
        return this.http.put('http://localhost:3000/quemEstaLogado', JSON.stringify(logado), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
	verLogin(): Observable<Logado> {
        return this.http.get('http://localhost:3000/quemEstaLogado').map(response => response.json());
    }
}
