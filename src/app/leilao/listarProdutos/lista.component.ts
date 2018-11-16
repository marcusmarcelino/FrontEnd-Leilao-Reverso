import { Component, OnInit } from '@angular/core';
import { LeilaoService } from '../leilao.service';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosEmFalta } from './ProdutosEmFalta';
import { Logado} from '../Logado';
import { User} from '../User';


@Component({
    templateUrl: 'lista.component.html',
	styleUrls: [ 'lista.component.css' ]
})
export class ListaComponent implements OnInit {
	lista:ProdutosEmFalta[];
	usuario: String = 'fornecedor';
	estaLogado: Logado = new Logado('');
	user: User = new User('','','');
	login: String = '';

    constructor(
		private leilaoService: LeilaoService,
		private route: ActivatedRoute,
		private router: Router) {
		
		this.leilaoService.all().
            subscribe(lista => this.lista = lista);
		this.leilaoService.verLogin().
            subscribe(estaLogado => this.estaLogado = estaLogado);
			
		this.preencher();
		}
		
	
    ngOnInit() {
        this.leilaoService.findUser(this.user.email, this.user.senha)
            .subscribe(
                user=> console.log(user),
                erro => console.log(erro));
				
		if(this.user != null){
			this.login = 'ok';
		}else{
			if(this.user.tipo=='cliente'){
				this.estaLogado.tipo='cliente';
				this.usuario='cliente';
			}else{
				this.estaLogado.tipo='fornecedor';
				this.usuario='fornecedor';
			}
		}
    }
	preencher(): void {
	this.estaLogado = new Logado('');
	}
}