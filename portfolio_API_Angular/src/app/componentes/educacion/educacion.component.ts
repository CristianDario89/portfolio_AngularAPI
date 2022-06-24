import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: any = [ //Datos guardados temporalmente en u8nh arreglo
    {
    "id":1, 
    "institucion":"Juan XXIII",
    "title":"Juan XXIII",
    "img":"./assets/img/logoedu1.jpg",
    "start":"2002",
    "end":"2005"
},
{
    "id":2, 
    "institucion":"UDEMY ACADEMY",
    "title":"Master en Javascript",
    "img":"./assets/img/logoedu2.png",
    "start":"Ago 2020",
    "end":"Nov 2020"
},
{
    "id":3, 
    "institucion":"Google analytic Academy",
    "title":"Google analytic para principiantes",
    "img":"./assets/img/logogoogle.png",
    "start":"Jun 2020",
    "end":"Sep 2020"
}
]

selectedEducacion: educacion = new educacion("","","","","");

  constructor( public router: Router) { }

  ngOnInit(): void {
   
  }
  addOrEdit(){
    if(this.selectedEducacion.id === 0){
      this.selectedEducacion.id = this.educacionList.length + 1;
      this.educacionList.push(this.selectedEducacion);
    }

   this.selectedEducacion = new educacion("","","","","");
  }

  openForEdit(educacion: educacion){
    this.selectedEducacion = educacion;
  }

  eliminar(){
    if(confirm('Seguro desea eliminarlo')){
      this.educacionList =this.educacionList.filter((x: educacion) => x != this.selectedEducacion);
      this.selectedEducacion = new educacion("","","","","");
    }
    
  }
  redirect() {
    this.router.navigate(['crear-educacion']);  
  }
}
 
