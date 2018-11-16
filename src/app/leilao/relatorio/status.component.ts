import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'status.component.html',
	styleUrls: [ 'status.component.css' ]
})
export class StatusComponent implements OnInit {
	usuario: String = 'cliente';

    constructor(private router: Router) { }
	
    ngOnInit(){ }
}