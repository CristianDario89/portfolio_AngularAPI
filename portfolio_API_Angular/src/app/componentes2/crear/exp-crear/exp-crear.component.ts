import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { experiencia } from 'src/app/model/experiencia.model';
@Component({
  selector: 'app-exp-crear',
  templateUrl: './exp-crear.component.html',
  styleUrls: ['./exp-crear.component.css']
})
export class ExpCrearComponent implements OnInit {
  experiencia: any = new experiencia("","","","","");

  constructor(public ExperienciaService: ExperienciaService,
              public router: Router) { }

  ngOnInit(): void {
  }



  volverAlPortfolio() {
  this.router.navigate(['portfolio']);
  }
  
  onSubmit(){
    console.log(this.experiencia);
 
  }
}
