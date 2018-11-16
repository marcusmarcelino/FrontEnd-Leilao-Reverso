import { Component, OnInit } from '@angular/core';
import { LeilaoService } from '../leilao.service';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaPropostas } from './ListaPropostas';


@Component({
    templateUrl: 'detalhes.component.html',
	styleUrls: [ 'detalhes.component.css' ]
})

export class DetalhesComponent implements OnInit {
    proposta: ListaPropostas;
	usuario: String = 'cliente';

    constructor(
		private leilaoService: LeilaoService,
		private route: ActivatedRoute,
		private router: Router) { }

    ngOnInit() {
        this.route.params
            .switchMap(params => {
                let id: number = Number.parseInt(params['id']);
                return this.leilaoService.find(id);
            })
            .subscribe(proposta => this.proposta = proposta );
		
    }
	telaPropostas() {
        this.router.navigate(['/ger_propostas/propostas']);
    }

}