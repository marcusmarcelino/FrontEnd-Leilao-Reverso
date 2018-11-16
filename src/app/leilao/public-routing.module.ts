import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

import { HomeLeilaoComponent } from './home/home-leilao.component';
import { RegrasComponent } from './regulamento/regras.component';
import { PropostasComponent } from './ger_propostas/propostas.component';
import { StatusComponent } from './relatorio/status.component';
import { EnviarArquivoComponent } from './fornecedor/enviar-arquivo.component';
import { DetalhesComponent} from './ger_propostas/detalhes.component';

import { ListaComponent } from './listarProdutos/lista.component';

const rotas: Routes = [
    {
        path: '', component: PublicComponent, children: [
			{ path: 'ger_propostas/propostas/detalhes/selecionada/:id', component: DetalhesComponent},
			{ path: 'fornecedor/arquivo/andamento', component: EnviarArquivoComponent},
			{ path: 'relatorio/andamento/status', component: StatusComponent},
			{ path: 'ger_propostas/propostas', component: PropostasComponent},
			{ path: 'regulamento/regras', component: RegrasComponent},
			{ path: 'listarProdutos/lista', component: ListaComponent},
            { path: '', component: HomeLeilaoComponent}
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule { }