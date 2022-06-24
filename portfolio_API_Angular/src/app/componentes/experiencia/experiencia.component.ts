import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: any = [
    {
    "id":1, 
    "empresa":"Diseñador web",
    "puesto":"Freelancer",
    "img":"./assets/img/logoexp11.png.crdownload",
    "start":"2016",
    "end":"2018"
},
{
    "id":2, 
    "empresa":"Backend developer",
    "puesto":"Freelancer",
    "img":"./assets/img/logoexp2.webp",
    "start":"Ago 2017",
    "end":"Oct 2019"
},
{
    "id":3, 
    "empresa":"Frontend developer",
    "puesto":"Freelancer",
    "img":"./assets/img/logoexp333.png",
    "start":"2019",
    "end":"2022"
}
]

selectedExperiencia: experiencia = new experiencia("","","","","");
  constructor(public router: Router) { }

  ngOnInit(): void {
 
  }

  addOrEdit(){
    if(this.selectedExperiencia.id === 0){
      this.selectedExperiencia.id = this.experienciaList.length + 1;
      this.experienciaList.push(this.selectedExperiencia);
    }

   this.selectedExperiencia = new experiencia("","","","","");
  }

  openForEdit(experiencia: experiencia){
    this.selectedExperiencia = experiencia;
  }

  eliminar(){
    if(confirm('Seguro desea eliminarlo')){
      this.experienciaList =this.experienciaList.filter((x: experiencia) => x != this.selectedExperiencia);
      this.selectedExperiencia = new experiencia("","","","","");
    }
    
  }
  redirect() {
    this.router.navigate(['crear-experiencia']);  
  }
}