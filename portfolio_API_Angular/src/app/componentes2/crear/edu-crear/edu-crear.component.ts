import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { educacion } from 'src/app/model/educacion.model';
@Component({
  selector: 'app-edu-crear',
  templateUrl: './edu-crear.component.html',
  styleUrls: ['./edu-crear.component.css']
})
export class EduCrearComponent implements OnInit {
  educacion: educacion = new educacion("", "", "", "", "");
  constructor(public educacionService: EducacionService,
    public router: Router) { }

  ngOnInit(): void {
  }


  volverAlPortfolio() {
    this.router.navigate(['portfolio']);
  }
  onSubmit() {
    console.log(this.educacion);
   
    this.volverAlPortfolio();
  }
}
