import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { skillservice } from 'src/app/servicios/skill.service';
import { Skill } from 'src/app/model/skill.model';
@Component({
  selector: 'app-skill-crear',
  templateUrl: './skill-crear.component.html',
  styleUrls: ['./skill-crear.component.css']
})
export class SkillCrearComponent implements OnInit {
  habilidad: any = new Skill("","");
  constructor(public skillservice: skillservice,
              public router: Router) { }

  ngOnInit(): void {
  }



  volverAlPortfolio(){
    this.router.navigate(['portfolio']);
  }
  onSubmit(){ 
   
  }
}
