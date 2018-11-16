import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaPropostas } from '../ger_propostas/ListaPropostas';
import { LeilaoService } from '../leilao.service';

@Component({
    templateUrl: 'enviar-arquivo.component.html',
	styleUrls: [ 'enviar-arquivo.component.css' ]
})
export class EnviarArquivoComponent implements OnInit {
    constructor(private route: ActivatedRoute,
	private router: Router,
	private leilaoService: LeilaoService
	) {
	this.preencher();
	}
	
	proposta: ListaPropostas = new ListaPropostas('','','','','');
	
    ngOnInit(){ }
	
	onSubmit() {
	this.leilaoService.save(this.proposta.nomeFornecedor,this.proposta.valor,this.proposta.empresa,this.proposta.cnpj,this.proposta.email)
            .subscribe(
                proposta => console.log(proposta),
                erro => console.log(erro)
				);
	}
	
	preencher(): void {
    this.proposta = new ListaPropostas('','','','','');
	}
	telaHome() {
        this.router.navigate(['/ger_propostas/propostas']);
    }
	salvar(){
	this.leilaoService.save(this.proposta.nomeFornecedor,this.proposta.valor,this.proposta.empresa,this.proposta.cnpj,this.proposta.email)
            .subscribe(
                proposta => console.log(proposta),
                erro => console.log(erro)
				);
	this.telaHome();
	}
}