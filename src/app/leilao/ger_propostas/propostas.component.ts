import { Component, OnInit } from '@angular/core';
import { LeilaoService } from '../leilao.service';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaPropostas } from './ListaPropostas';

@Component({
    templateUrl: 'propostas.component.html',
	styleUrls: [ 'propostas.component.css' ]
})
export class PropostasComponent implements OnInit {


    propostas: ListaPropostas[];

    constructor(
		private leilaoService: LeilaoService,
		private route: ActivatedRoute,
		private router: Router) { }
		
	
    ngOnInit() {
        this.leilaoService.allPropostas().
            subscribe(propostas => this.propostas = propostas);
    }
	mostrarDetalhes(id:number) {
        this.router.navigate(['/ger_propostas/propostas/detalhes/selecionada',id]);
    }
}